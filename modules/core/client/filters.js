/* jshint ignore:start */
'use strict';

angular.module('core').
  filter('fromNow', function() {
    return function(dateString) {
      return moment(dateString).fromNow();
    };
  });

angular.module('core').filter('urlify', function() {
    return function(text) {
        var urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g;
        if (text) {
            return text.replace(urlRegex, function(url) {
                var displayedUrl;
                if (url.length > 40) {
                    displayedUrl = url.substring(0, 40);
                    displayedUrl += '...';
                } else {
                    displayedUrl = url;
                }
                return '<a href="' + url + '" target="blank">' + displayedUrl + '</a>';
            });
        }
    }
});

angular.module('core').filter('humanizeNumber', [
    function () {
        return function (n) {
            var num = parseInt(n, 10);
            if (isNaN(num)) {
                return n;
            }

            var si = [
            { value: 1E18, symbol: 'E' },
            { value: 1E15, symbol: 'P' },
            { value: 1E12, symbol: 'T' },
            { value: 1E9,  symbol: 'G' },
            { value: 1E6,  symbol: 'M' },
            { value: 1E3,  symbol: 'k' }
            ], i;
            for (i = 0; i < si.length; i++) {
              if (num >= si[i].value) {
                return (num / si[i].value).toFixed(1).replace(/\.?0+$/, '') + si[i].symbol;
              }
            }
            return num;
        };
    }
]);

angular.module('core').filter('tel', function () {
    return function (tel) {
        if (!tel) {
          return '';
        }
        var value = tel.toString().trim().replace(/^\+/, '');
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;
            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;
            default:
                return tel;
        }
        if (country == 1) {
            country = "";
        }
        number = number.slice(0, 3) + '-' + number.slice(3);
        return (country + " (" + city + ") " + number).trim();
    };
});
