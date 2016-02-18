var assert = require('assert');
var FindMark = require("../FindMark");

var findMark = new FindMark();

describe("FindMark module", function() {
  describe("Доступность полей модуля", function() {
    it("Объект regexp доступен", function() {
      assert.notEqual(undefined, findMark.regexp);
    });
    
    it("Поле regexp.default доступно", function() {
      assert.notEqual(undefined, findMark.regexp.default);
    });
    
    it("Поле regexp.value доступно", function() {
      assert.notEqual(undefined, findMark.regexp.value);
    });
  });
  describe("Установка регулярного выражения для поиска и его получение", function() {
    it("Установка значения '/\{\{([a-zA-Z0-9_ |]*)\}\}/gm'", function() {
      var targetRegexp = /\{\{([a-zA-Z0-9_ |]*)\}\}/gm;
      findMark.setRegexp(targetRegexp);
      assert.deepEqual(targetRegexp, findMark.regexp.value);
    });
    
    it("Метод getRegexp возвращает значение /\{\{([a-zA-Z0-9_ |]*)\}\}/gm", function() {
      var targetRegexp = /\{\{([a-zA-Z0-9_ |]*)\}\}/gm;
      findMark.setRegexp(targetRegexp);
      assert.deepEqual(/\{\{([a-zA-Z0-9_ |]*)\}\}/gm, findMark.getRegexp());
    });
  });
});