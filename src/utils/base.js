const dayjs = require('dayjs')
  //数字转译映射
const codeMapper = (code, map) => {
  return map[code];
};
//数组转译映射
const codeArrayMapper = (codes, map) => {
  return codes.map((el) => {
    return map[el];
  });
};
//选项互斥
const repulse = (val, array) => {
  if (array.indexOf(val) > -1) {
    return [val];
  } else {
    return array;
  }
};
//日期格式化
const nowaDays = () => {
  const now = new Date();
  return {
    y: now.getFullYear(),
    m: now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1,
    d: now.getDate() < 10 ? "0" + now.getDate() : now.getDate(),
    ymd: "" +
      now.getFullYear() +
      "-" +
      (now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1) +
      "-" +
      (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()),
  };
};
//日期比较
const getTimeDiff = (t1, t2) => {
  const tmilldiff = Math.abs(t1 - t2);
  const tsdiff = parseInt(tmilldiff / 1000);
  const daydiff = parseInt(tsdiff / (3600 * 24));
  const hourdiff = parseInt((tsdiff % (3600 * 24)) / 3600);
  const minsdiff = parseInt(((tsdiff % (3600 * 24)) % 3600) / 60);
  const scdsdiff = ((tsdiff % (3600 * 24)) % 3600) % 60;
  return (
    "日期相差:" +
    daydiff +
    "天" +
    hourdiff +
    "小时" +
    minsdiff +
    "分钟" +
    scdsdiff +
    "秒"
  );
};
const formateYmd = (val) => {
    return dayjs(val).format('YYYY-MM-DD')
  }
  //遍历深拷贝
const deepCopy = (obj) => {
  let rst;
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      rst = [];
      for (let i in obj) {
        rst.push(deepClone(obj[i]));
      }
    } else {
      rst = {};
      for (let i in obj) {
        rst[i] = deepClone(obj[i]);
      }
    }
  } else {
    rst = obj;
  }
  return rst;
};

const deepClone = obj => {
  if (obj === null) return null;
  if (obj === undefined) return undefined;
  let rst = new obj.constructor();
  if (!(obj instanceof Object)) rst = obj;
  if (obj instanceof RegExp) rst = obj;
  if (obj instanceof Function) rst = obj;
  if (Array.isArray(obj)) {
    for (let i in obj) {
      rst.push(deepClone(obj[i]));
    }
  }
  for (let key in obj) {
    if (obj.keys(key)) {
      rst[key] = deepClone(obj[key]);
    }
  }
  return rst;
}

module.exports = {
  codeMapper,
  codeArrayMapper,
  repulse,
  deepCopy,
  deepClone,
  nowaDays,
  getTimeDiff,
  formateYmd
};