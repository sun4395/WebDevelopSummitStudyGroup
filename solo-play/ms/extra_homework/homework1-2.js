
/////////////////////////////////////////////////////////////////////////////////////////////////////
// 객체는 Depth 5 이상 가져야 합니다.
// 각 Depth 에는 최소 1개 이상의 아래 타입의 값들이 존재해야 합니다.
// String
// Number
// Function
// 이렇게 생성한 객체를 JSON.stringify 후 JSON.parse 를 했을 때 어떤 차이가 있는지 알아보세요.
/////////////////////////////////////////////////////////////////////////////////////////////////////

let Book = {
    title : "나미야 잡화점의 기적",
    author : "히가시노 게이고",
    totalPage : 455,
    bookmark : [],
    chapters : {
        count : 5,
        contents : {
            chapter : {
                chapterNum : 1,
                title : "답장은 우유 상자에",
                page : {
                    start : 7,
                    count : 76
                }
            }
        }
    },
    addBookmark : function(page) {
        this.bookmark.add(page);
    },
    getBookmark : function() {
        return this.bookmark;
    }
}

jsonObj = JSON.stringify(Book);
parsedObj = JSON.parse(jsonObj);
console.log(jsonObj);
console.log(parsedObj);

// String, Number type 은 JSON.stringfy, JSON.parse 후 복원됨
// Function type 은 JSON.stringfy, JSON.parse 후 사라짐




/////////////////////////////////////////////////////////////////////////////////////////////////////
// 객체가 아닌 값을 stringify 하거나, JSON 객체가 아닌데 parse 할 경우 어떤 일이 발생하는지 알아보세요.
/////////////////////////////////////////////////////////////////////////////////////////////////////

let num = 1234567;
console.log(JSON.stringify(num));
num = NaN;
console.log(JSON.stringify(num));
// NaN, null, Infinity 모두 stringfy 시 null 로 처리됨

let obj = {
   a: 1,
   b: 2
}

console.log(
    JSON.stringify(
       JSON.stringify(obj)       
    )
);
// stringfy 한 객체를 다시 stringfy 하는 경우 문자열로 처리됨


JSON.parse(`우리의 월급은 매우 짜다`);
// JSON 객체가 아닌데 parse 할 경우 SyntaxError 발생