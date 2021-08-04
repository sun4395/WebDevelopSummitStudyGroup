/**
 * 이 예시의 경우 하나의 객체에 모든 데이터를 넣고,
 * 이 데이터에 맞게 DOM 을 생성하는 함수들을 구현합니다.
 * 
 * 이렇게 하면 동일한 포맷의 화면을 추가로 출력해야 할 때 (Ex : 회원 관련 기능)
 * 추가 함수구현 없이 이 객체에 필요한 데이터만 추가해주면 자동으로 생성이 됩니다.
 * (아래 DOM_DATA.AdditionalData 프로퍼티 참고)
 */

const DOM_DATA = {
    RegisterMember: {
        title: `회원 가입`,
        class: `register`,
        table: {
            ID: {
                id: `id`,
                type: `text`
            },
            // JS 는 UTF-8 인코딩이기 때문이 이렇게 변수/프로퍼티명 한글이 가능함
            비밀번호: {
                id: `pw`,
                type: `password`
            },
            닉네임: {
                id: `nick`,
                type: `text`
            }
        },
        buttons: {
            // 프로퍼티 이름에 스페이스가 있으므로 반드시 " " 로 묶어줘야 함
            "계정 생성": {
                id: `createId`,
                type: `text`
            },
            "입력 초기화": {
                id: `resetAll`,
                type: `password`
            }
        }
    },
    ManageMember: {
        title: `회원 관리 프로그램`,
        class: `manage`,
        table: {
            ID: {
                id: `id`,
                type: `text`
            },
            비밀번호: {
                id: `pw`,
                type: `password`
            },
            닉네임: {
                id: `nick`,
                type: `text`
            }
        },
        buttons: {
            "계정 생성": {
                id: `createId`,
                type: `text`
            },
            "입력 초기화": {
                id: `resetAll`,
                type: `password`
            },
            "계정 삭제": {
                id: `deleteId`,
                type: `text`
            },
        }
    },
    /**
     * 예시로, 아래 AdditionalData 를 수행하여 객체에 데이터를 추가하면,
     * 별도 함수 구현 없이 바로 필요한 구성 요소가 모두 생성됩니다.
     */
    AdditionalData: {
        title: `회원 정화 프로그램`,
        class: `purify`,
        table: {
            ID: {
                id: `id`,
                type: `text`
            },
            비밀번호: {
                id: `pw`,
                type: `password`
            },
            닉네임: {
                id: `nick`,
                type: `text`
            },
            // 입력 개수가 3개가 아니어도 생성에 전혀 문제가 없습니다.
            "정화 마스터 키": {
                id: `purifyMasterKey`,
                type: `password`
            }
        },
        buttons: {
            "정화 여부 확인": {
                id: `checkpurify`,
                type: `text`
            },
            "입력 초기화": {
                id: `resetAll`,
                type: `password`
            },
            "계정 사형 선고": {
                id: `purify`,
                type: `text`
            },
        }
    }
};

(function () {
    generateFullPage(DOM_DATA);

    function generateFullPage(data) {
        let mainLayoutTable = createElement(`table`);
        let mainLayoutTableBody = createElement(`tbody`);
        let tr = createElement(`tr`);
        for (let dataName in data) {
            const td = generateSectionTd(data[dataName]);
            tr.appendChild(td);
        }
        mainLayoutTableBody.appendChild(tr);
        mainLayoutTable.appendChild(mainLayoutTableBody);
        document.body.appendChild(mainLayoutTable);
    }

    function generateSectionTd(data) {
        const mainTd = createElement(`td`);

        // Create title
        const titleEl = createTitle(data);
        const tableEl = createTable(data);
        const buttonEls = createButtons(data);

        mainTd.appendChild(titleEl);
        mainTd.appendChild(tableEl);
        mainTd.appendChild(buttonEls);
        return mainTd;
    }


    // 이 함수가 모든 엘리먼트 생성을 담당합니다.
    function createElement(params) {

        // 만약 파라메터가 그냥 string 이라면 해당 태그를 생성만 하고 반환
        if (typeof params === `string`) {
            return document.createElement(params);
        }

        // 객체로 온다면 객체의 각 값을 읽어서 태그에 필요한 속성값 및 데이터를 반영
        const el = document.createElement(params.tag);
        if (`attribute` in params) {
            for (let key in params.attribute) {
                const attr = params.attribute[key]
                el.setAttribute(key, attr);
            }
        }

        if (`data` in params) {
            el.innerHTML = params.data;
        }

        if (`type` in params) {
            el.type = params.type;
        }

        return el;
    }

    // 각 화면의 제목 생성
    function createTitle(data) {
        return createElement({
            tag: `div`,
            data: data.title
        })
    }

    // 입력란에 대응되는 표 생성
    function createTable(data) {
        const tableData = data.table
        const tableEl = createElement(`table`);
        const tbodyEl = createElement(`tbody`);

        for (let header in tableData) {
            const tr = createElement(`tr`);

            const th = createElement({
                tag: `th`,
                data: header
            });

            const td = createElement({
                tag: `td`
            })

            const input = createElement({
                tag: `input`,
                type: tableData[header].type,
                attribute: {
                    class: `${data.class}Input`,
                    id: `${data.class}Input_${tableData[header].id}`
                }
            })

            tr.appendChild(th);
            td.appendChild(input);
            tr.appendChild(td);
            tbodyEl.appendChild(tr);
        }

        tableEl.appendChild(tbodyEl);
        return tableEl;
    }

    // 버튼들을 생성
    function createButtons(data) {
        const buttonsData = data.buttons;
        const div = createElement({
            tag: `div`,
            attribute: {
                class: `buttonArea`,
                id: `${data.class}Btns`
            }
        })
        for (let btnName in buttonsData) {
            let btn = createElement({
                tag: `button`,
                data: btnName,
                attribute: {
                    class: `${data.class}Btn`,
                    id: buttonsData[btnName].id
                }
            });
            div.appendChild(btn);
        }
        return div;
    }
})();