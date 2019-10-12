const compute = (num1, num2, command) => {
  if (command === "+") {
    return String(Number(num1) + Number(num2))
  }
  if (command === '-') {
    return String(Number(num1) - Number(num2))
  }
  if (command === '*') {
    return String(Number(num1) * Number(num2))
  }
  if (command === "÷") {
    if (num2 === '0') {
      alert('error, num2 can not be 0')
      return '0'
    } else {
      return String(Number(num1) / Number(num2))
    }    
  }
}
const isNumber = (num) => {
  return /[0-9]+/.test(num)
}
export default function judge(obj, btnValue) {
  console.log(btnValue)
  if (isNumber(btnValue)) {
    // 防止多重0输入
    if (btnValue === '0' && obj.next === '0') {
      return {}
    }
    if(obj.command !== '') {
      if (obj.next !== '') {
        return {next:obj.next + btnValue}
      }
      return {next: btnValue}
    }
    if (obj.next !== '') {
      let next = obj.next === '0' ? btnValue : obj.next+btnValue
      return {
        result: '',
        next
      }
    }
    return {
      result: '',
      next: btnValue
    }
  }
  // AC 清空
  if (btnValue === 'AC') {
    return {
      result: '0',
      next: '0',
      command: ''
    }
  }
  // 取反键
  if (btnValue === '+/-') {
    if (obj.next !== '') {
      return {next: (-1 * parseFloat(obj.next)).toString()}
    }
    if (obj.result !== '') {
      return {result: (-1 * parseFloat(obj.result)).toString()}
    }
    return {}
  }
  // 等号
  if (btnValue === '=') {
    if (obj.next !== '' && obj.command !== '') {
      return {
        result: compute(obj.result,obj.next,obj.command),
        next: '',
        command: '',
        showLoading: true
      }
    }
  }
  // 小数输入
  if(btnValue === '.') {
    if (obj.next !== '') {
      if (obj.next.include('.')) {
        // 多重.输入
        return {}
      }
      return { next: obj.next + "." };
    }
    // next 为空时 点击.返回 0.
    return { next: '0.' }
  }
  if (btnValue === '%') {
    if (obj.command !== '' && obj.next !== '') {
      let result = compute(obj.result, obj.next, obj.command)
      return { result: (Number(result)/100).toFixed(2)}
    } 
    return {}
  }
  if (obj.command !== '') {
    return {
      result: compute(obj.result,obj.next, obj.command),
      next: '',
      command: btnValue,
    }
  }
  if (obj.next === '') {
    return {command: btnValue}
  }
  // 如果不是特殊按键,  替换result 保留命令
  return {
    result: obj.next,
    next: '',
    command: btnValue
  }

}
