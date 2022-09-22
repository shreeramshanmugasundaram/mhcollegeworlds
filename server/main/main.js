import data from "./tp.js";
// const civil=data.civil
// const comp=data.mech
// const mech=data.mech
// const entc=data.entc
// const ele=data.ele
const namedict = data.namedict;
const webdict = data.webdict;

const collegelist = (
  percentile,
  cat,
  gender,
  branch,
  owndistrict,
  district1,
  district2,
  district3
) => {
  const dict1 = data.selectDict(branch);
  const dict2 = data.sortBydistrict(dict1, district1, district2, district3);
  const homec = data.h_or_o(gender, cat)[0];
  const othhomec = data.h_or_o(gender, cat)[1];
  const dict3 = data.addCutoff(dict2, owndistrict, othhomec, homec);
  const dict4 = data.arrangeIndiscending(dict3);
  const list1 = data.produceCatlist(dict4);
  //console.log(list1.length)
  const near_index = data.nearest_number(list1, percentile);
  //console.log(near_index) //
  const list2 = data.produceDtecodes(dict4, near_index);
  // console.log(list2)
  const dictfinal = [];
  list2.forEach((element) => {
    const cutoffarrayobj = dict4.find((item) => item.dte === element);
    const cutoffval = cutoffarrayobj.cutoff;
    
    var addd = {
      dte: element,
      name: namedict[element].name,
      dist: namedict[element].dist,
      cutoff: cutoffval,
      web_address: webdict[`${element}`],
    };
    dictfinal.push(addd);
  });
  // console.log("thisiis dict final",dictfinal)/
  return dictfinal;
};

// const collegelist = getcolleges(90,"open","male","comp","Pune","Pune","Pune","Pune")

// // console.log("this is final list",collegelist)
export default collegelist;
