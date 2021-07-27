
/*** Join start ***/ 
join_main = defaultStructure()

join_main.header.innerText = `회원 가입`;

join_inputs = [
    {label_text: `ID`, input_id: `id_join`, input_type: `text`, place_holder: `Please input ID`},
    {label_text: `비밀번호`, input_id: `pw_join`, input_type: `password`, place_holder: `Please input Password`},
    {label_text: `닉네임`, input_id: `nick_join`, input_type: `text`, place_holder: `Please input Nickname`},
]

for (let item of join_inputs) {
    let input_block = create_input_block(item.label_text, item.input_id, item.input_type, item.place_holder)
    join_main.form.appendChild(input_block)
}

join_buttons = [
    {attr: {class: `btn`, type: `submit`, id: `create_account`}, text: `계정 생성`},
    {attr: {class: `btn`, type: `reset`, id: `init_join_form`}, text: `입력 초기화`}
]

join_main.form.appendChild(create_btn_block(join_buttons))


/*** Join End ***/
document.body.appendChild(document.createElement(`hr`))
/*** Manage start ***/ 
manage_main = defaultStructure()

manage_main.header.innerText = `회원 관리 프로그램`;

manage_inputs = [
    {label_text: `ID`, input_id: `id_manage`, input_type: `text`, place_holder: `Please input ID`},
    {label_text: `비밀번호`, input_id: `pw_manage`, input_type: `password`, place_holder: `Please input Password`},
    {label_text: `닉네임`, input_id: `nick_manage`, input_type: `text`, place_holder: `Please input Nickname`},
]

for (let item of manage_inputs) {
    let input_block = create_input_block(item.label_text, item.input_id, item.input_type, item.place_holder)
    manage_main.form.appendChild(input_block)
}

manage_buttons = [
    {attr: {class: `btn`, type: `submit`, id: `search_account`}, text: `계정 검색`},
    {attr: {class: `btn`, type: `submit`, id: `update_account`}, text: `정보 수정`},
    {attr: {class: `btn`, type: `submit`, id: `delete_account`}, text: `계정 삭제`}
]

manage_main.form.appendChild(create_btn_block(manage_buttons))
/*** Manage End ***/


function defaultStructure(){
    const div_main = document.createElement(`div`);
    const h2 = document.createElement(`h2`);
    const form = document.createElement(`form`);
    
    // set div main
    setClass(div_main,`main`)
    
    // set form
    setClass(form,`form-class`)

    // append to parent
    div_main.appendChild(h2);
    div_main.appendChild(form);


    document.body.appendChild(div_main)
    return {main: div_main, header: h2, form: form}
}


function setClass(elem, className){
    elem.setAttribute(`class`, className);
}

function create_btn_block(btn_array){
    const div_content = document.createElement(`div`)
    setClass(div_content, `content-area`)

    for (let btn_attr of btn_array) {
        const button = document.createElement(`button`)
        button.innerText = btn_attr.text
        setAttributes(button, btn_attr.attr)
        div_content.appendChild(button)
    }
    return div_content
}

function create_input_block(label_text=`label`, input_id, input_type, place_holder=``){
    const div_content = document.createElement(`div`)
    setClass(div_content, `content-area`)

    const label_content = document.createElement(`label`)
    setClass(label_content, `input-label`)
    label_content.setAttribute(`for`, input_id)
    label_content.innerText = label_text

    const input_content = document.createElement(`input`)
    let input_attr = {
        id: input_id,
        type: input_type,
        placeholder: place_holder,
        class: `input-class`
    }
    setAttributes(input_content, input_attr)

    div_content.appendChild(label_content)
    div_content.appendChild(input_content)

    return div_content
}

function setAttributes(elem, attributes){
    for (let key in attributes){
        elem.setAttribute(key, attributes[key])
    }
}