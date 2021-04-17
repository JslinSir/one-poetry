 
const { characters } = require('./characters')
const charactersLength = characters.length
//  指定范围随机数，包含下限上限
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


// 获取随机汉字
const getRandomCharacters = (anser) => {
    const stringIndex = random(0, charactersLength)
    const stringC = characters.substring(stringIndex, stringIndex + 1)
    if (stringC && !anser.includes(stringC)) {
        return stringC
    } else {
        return getRandomCharacters()
    }
}

// 把数组打乱顺序
const shuffle = function (array) {
    let m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
// 字符串转 字,符,串
const formateSelfString = (string_) => {
    let temp = []
    if (string_.length > 0) {
        const sA = new Array(string_.length).fill(1)
        temp = sA.map((item, index) => string_.substring(index, index + 1))
    }
    return temp.join(',')
}

// 打乱答案汉字和其他汉字组合
const getCharactersCombination = (anser, total) => {
    //可随机获得汉字个数
    // 把 anser 清洗下
    anser = (anser || '').replace(/,/g, '').replace(/。/g, '')
    let string = anser
    let fm_ = formateSelfString(string)
    const randomNums = total - (anser || '').length
    if (randomNums > 0) {
        const randomArray = new Array(randomNums).fill(1)
        const charactersString = randomArray.map(() => getRandomCharacters(anser)).join(',')
        string =
            string = `${fm_},${charactersString}`
    } else {
        string = fm_
    }
    const strigArray = shuffle(string.split(','))
    string = strigArray.join(',').replace(/,/g,'')
    return {
        string,
        stringFm:formateSelfString(string)
    }
}

export {
    random,
    getRandomCharacters,
    shuffle,
    getCharactersCombination
}