var fs = require("fs");//파일 시스템을 이용해 불러온다


module.exports = function (req, res, layoutName, contact) {
  var baseResource = fs.readFileSync("./layout/base.html", "utf-8");
  var headerResource = fs.readFileSync("./layout/header.html", "utf-8");
  var footerResource = fs.readFileSync("./layout/footer.html", "utf-8");
  var contentResource = fs.readFileSync("./layout/" + layoutName + ".html", "utf-8");
//네게 파일을 읽어오고 event를 handle해 준다
  resultResource = baseResource.replace("{{ header }}", headerResource);
  resultResource = resultResource.replace("{{ footer }}", footerResource);
  resultResource = resultResource.replace("{{ content }}", contentResource);

  res.write(resultResource);
  res.end();

}
