'use strict';

angular
  .module('company')
  .controller('CompanyController', CompanyController);

CompanyController.$inject = ['$scope', 'CompanyService', 'TrialService', '$state', 'CampaignService', '$location', 'Authentication', 'Menus', 'item'];

function CompanyController($scope, CompanyService, TrialService, $state, CampaignService, $location, Authentication, Menus, item) {
  var vm = this;
  vm.success = false;
  vm.create = create;
  vm.remove = remove;
  vm.update = update;
  vm.init = init;
  vm.find = find;
  vm.select = select;
  vm.findOne = findOne;
  vm.findMyCompany = findMyCompany;
  vm.findByStateParam = findByStateParam;
  vm.authentication = Authentication;
  vm.saveBannerPicture = saveBannerPicture;
  vm.state = $state;
  vm.company = item;

  // Get the topbar menu
  vm.menu = Menus.getMenu('company.settings.menu');

  function create(isValid) {
    vm.error = null;

    // Create new Company object
    var CompanyObj = CompanyService.company();
    var company = new CompanyObj({
      name: this.name,
      url: this.url,
      slug: this.slug
    });

    // Redirect after save
    company.$save(function (response) {
      //$location.path('admin/company/' + response.id);
      // Clear form fields
      vm.name = '';
      vm.url = '';
      vm.slug = '';
      // go to the new company dashboard
      $state.go('slug', {slug: response.slug});
    }, function (errorResponse) {
      console.log(errorResponse);
      vm.error = errorResponse.data.message;
    });
  }

  function remove(company) {
    if (company) {
      company.$remove();

      for (var i in vm.companies) {
        if (vm.companies[i] === company) {
          vm.companies.splice(i, 1);
        }
      }
    }
  }

  function update() {
    vm.error = null;

    // Capture full address from google maps api service
    if (vm.company.addressDetails && vm.company.addressDetails.formatted_address) {
      vm.company.address = vm.company.addressDetails.formatted_address;
    }

    vm.company.$update(function() {
      vm.success = true;
    }, function (errorResponse) {
      console.log(errorResponse);
      vm.error = errorResponse.data.message;
    });
  }

  function find() {
    CompanyService.mycompany().query(function(data){
      vm.companies = data;
    });
  }

  function findByStateParam() {
    console.log('find by state');
    CompanyService.companyBySlug()
      .get({companySlug: $state.params.companySlug}, function(data){
        vm.company = data;
        var index = vm.company.url.indexOf('www.');
        vm.company.domain = vm.company.url.substring((index + 4), vm.company.url.length);
        console.log('domain', vm.company.domain);
      }, function(err){
        $state.go('footer.not-found');
      });
  }

  function select(comp) {
    vm.authentication.setCompany(comp);
    $state.go('slug', { slug: comp.slug });
  }

  function init() {
    console.log('init company: ', vm.company);
    if($state.current.name === 'slug.company'){
      $state.go('slug.company.navbar.campaign.list');
    }
  }

  function findOne() {
    console.log('find one');
    vm.company = CompanyService.company()
      .get({companyId: $state.params.companyId}, function(data){
        //vm.company = data;
      });
  }

  function findMyCompany() {
    var companies = CompanyService.companyByUser().query({
      userId: Authentication.user.id
    }, function() {
      vm.company = companies[0];
      $state.go('slug.company.navbar.home', { companySlug: vm.company.slug });
    }, function(err) {
      $state.go('index');
    });
  }

  function saveBannerPicture(fileId, companyId) {
    var CompanyObj = CompanyService.company();
    var company = new CompanyObj();
    company.banner = { fileId: fileId };
    company.id = companyId;

    CompanyService.updateCompany(company)
      .then(function(result) {
        console.log(result);
        vm.succes = true;
      }, function(reason) {
        vm.error = reason;
      });
  }
}
