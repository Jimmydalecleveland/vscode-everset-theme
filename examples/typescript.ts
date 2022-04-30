interface Dragon {
  breathAttack: () => number;
  tailAttack: () => number;
}

interface Lich {
  miasma: () => number;
}

interface UndeadDragon extends Dragon, Lich {}

const urDragon: UndeadDragon = {
  breathAttack() {
    return 48;
  },
  tailAttack() {
    return 7;
  },
  miasma() {
    return 20;
  },
};

const myArr: number[] = [1, 2, 3];

const map = <InType, OutType>(arr: InType[], cb: (val: InType) => OutType) => {
  let newArr = [];
  for (const item of arr) {
    newArr.push(cb(item));
  }
  return newArr;
};

const arr2 = map(myArr, (val) => {
  return val * 2;
});
