function Calc(){
    const first=document.getElementById('first').value
    const second = document.getElementById('second').value
    const radioButtons=document.getElementsByName('operation')
    let operation;
    for (const operationElement of radioButtons) {
        if (operationElement.checked)
            operation=operationElement.value
    }
    let result=0;
    switch (operation)
    {
        case 'plus':
        {
            result=(+first)+(+second)
        } break
        case 'minus':
        {
            result=(+first)-(+second)
        }break
        case 'multiply':
        {
            result=(+first)*(+second)
        }break
        case 'divide':
        {
            result=(+first)/(+second)
        }break;
    }
    if (Number.isNaN(result))
        result=0
    document.getElementById('result').value=result
}