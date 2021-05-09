/**
 * js压缩图片
 * @param file 图片文件对象
 * @param quality 压缩倍率 0~1
 * @constructor
 */
export function compressImage(file, quality) {

  // 图片小于1M不压缩
  if (file.size < Math.pow(1024, 2)) {
      return file;
  }
  //默认0.5倍压缩
  quality = quality || 0.5;
      
  //保存文件名，后边用到
  var name = file.name; 
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
      var src = e.target.result;

      var img = new Image();
      img.src = src;
      img.onload = function () {
          var w = img.width;
          var h = img.height;
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          // 创建属性节点
          var anw = document.createAttribute("width");
          anw.nodeValue = w;
          var anh = document.createAttribute("height");
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);

          //铺底色 PNG转JPEG时透明区域会变黑色
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, w, h);

          ctx.drawImage(img, 0, 0, w, h);
          // quality值越小，所绘制出的图像越模糊
          var base64 = canvas.toDataURL('image/jpeg', quality); //图片格式jpeg或webp可以选0-1质量区间

          // 返回base64转blob的值
          console.log('\u539F\u56FE' + (src.length / 1024).toFixed(2) + 'kb', '\u65B0\u56FE' + (base64.length / 1024).toFixed(2) + 'kb');
          //去掉url的头，并转换为byte
          var bytes = window.atob(base64.split(',')[1]);
          //处理异常,将ascii码小于0的转换为大于0
          var ab = new ArrayBuffer(bytes.length);
          var ia = new Uint8Array(ab);
          for (var i = 0; i < bytes.length; i++) {
              ia[i] = bytes.charCodeAt(i);
          }
          //通过Blob生成新图片文件对象
          file = new Blob([ab], { type: 'image/jpeg' });
          //这里需要重新设置文件名
          file.name = name;

          return file;
      };
      img.onerror = function (e) {
          console.error(e)
      };
  };
  reader.onerror = function (e) {
     console.error(e)
  };
}

export default {
  compressImage
}