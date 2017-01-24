app.controller('MyIndexController', ['$scope', function ($scope) {
  $scope.searchTable = false;
  $scope.files = [];
  $scope.searchFiles = [];
  $scope.instance = new Index();
  $scope.showIndex = false;
  $scope.showSearch = false;
  $scope.indexData = {};
  $scope.objKeys = Object.keys;

  $scope.getFile = () => {
    const file = document.getElementById('filePath').files[0];
    $scope.filename = file.name;
    $scope.files.push(file.name);
    $scope.searchFiles.push(file.name);
    $scope.instance.readFile(file);
  }

  $scope.createIndex = () => {
    $scope.showIndex = true;
    $scope.showSearch = false;
    $scope.indexData = $scope.instance.indexObject;
  }

  $scope.search = () => {
    $scope.showIndex = false;
    $scope.showSearch = true;
    const terms = document.getElementById("terms").value;
    const opt = document.getElementById("select");
    const filename = opt.options[opt.selectedIndex].text;
    $scope.results = $scope.instance.searchIndex(filename, terms);
    console.log($scope.results);
  }
}]);