// Depth 5 예시
let obj = {
    depth1: {
        name: `hyein`,
        depth2: {
            depth3: {
                todo: `Rich baegsu`,
                python: [`Simple is the best!`],
                depth4: {
                    random: Math.random(),
                    depth5: {
                        date: new Date(),
                        age: new Date().getFullYear() - new Date(`1990`).getFullYear(),
                        type_age: function() { return typeof this.age }
                    }

                }
            }
        }
    }
}

// 1. 객체 -> JSON.stringfy 결과
//    function이 사라짐
console.log(obj)
json_str = JSON.stringify(obj, null, 2)
console.log(json_str)

console.log(`-----------------------------`)

// 2. JSON객체 -> JSON.parse 결과
//    그대로 객체화되어 사용 가능. "."을 통해서 property에 접근 가능
json_parse = JSON.parse(json_str)
console.log(json_parse)
console.log(`json_parse type: ${typeof json_parse}`)
console.log(
  `date: ${json_parse.depth1.depth2.depth3.depth4.depth5.date}\n` + 
  `age: ${json_parse.depth1.depth2.depth3.depth4.depth5.age}\n` +
  `type_age: ${typeof json_parse.depth1.depth2.depth3.depth4.depth5.age}`)


console.log(`-----------------------------`)

// 3. JSON 객체가 아닐때 JSON parse
//    에러 발생
//    parse는 string형태만 json object로 변환할 수 있음
try {
    sweethome = JSON.parse("집에가고싶다")
    console.log(sweethome)
} catch (err) {
    console.log(err)
} finally {
    console.log("집에 못갔다..")
}


try {
    obj_json = JSON.parse(obj)
    console.log(obj_json)
} catch (err) {
    console.log(err)
} finally {
    console.log("function이 있어서 json이 아닌가")
}
console.log(`-----------------------------`)

// 4. JSON 객체가 아닌데 JSON stringify
//  그대로 문자열(string)으로 만듬
let earth_radius = 6371
let json_str_earth_radius = JSON.stringify(earth_radius)
console.log(`${json_str_earth_radius} \n type = ${typeof json_str_earth_radius}`)
earth_radius = NaN
json_str_earth_radius = JSON.stringify(earth_radius)
console.log(`${json_str_earth_radius} \n type = ${typeof json_str_earth_radius}`)

// stringfy 한걸 다시 stringfy 하면 
// string을 한번 더 string화 하는 것이므로 "나 \등을 문자열로 인식하기위해
// \ 지옥이 발생함
json_str = JSON.stringify(obj)
console.log(json_str)
console.log('\n')
console.log(JSON.stringify(json_str))
console.log(JSON.stringify(JSON.stringify(json_str)))
