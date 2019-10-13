const compute = (num1, num2, command) => {
  if (command === "+") {
    return String(Number(num1) + Number(num2))
  }
  if (command === '-') {
    return String(Number(num1) - Number(num2))
  }
  if (command === 'x') {
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
  // 判断是不是数值按键
  if (isNumber(btnValue)) {
    // 防止多重0输入
    if (btnValue === '0' && obj.next === '0') {
      return {}
    }
    // 存在next 以及命令按键 next += btnvalue 不存在 next = btnvalue
    if(obj.command !== '') {
      if (obj.next !== '') {
        return {next:obj.next + btnValue}
      }
      return {next: btnValue}
    }
    // 没有输入过特殊按键的时候 且 next不为空
    if (obj.next !== '') {
      // 判断现在的next是不是等于 0 （初始值） 是的话 next= btnvalue 否的话 next += btnValue
      let next = obj.next === '0' ? btnValue : obj.next + btnValue
      return {
        // result: '',
        next: next
      }
    }
    return {
      // result: '',
      next: btnValue
    }
  }
  // AC 清空 重置计算器
  if (btnValue === 'AC') {
    return {
      result: '0',
      next: '0',
      command: ''
    }
  }
  // 取反键
  if (btnValue === '+/-') {
    // 如果 next 不为空 (还没有计算结果) 对next求百分比
    if (obj.next !== '') {
      return {next: (-1 * parseFloat(obj.next)).toString()}
    }
    // 如果  next 等于空 对result进行操作
    if (obj.result !== '') {
      return {result: (-1 * parseFloat(obj.result)).toString()}
    }
    // 没有输入 点击%返回空
    return {}
  }
  // 等号
  if (btnValue === '=') {
    // 存在命令按键以及next
    if (obj.next !== '' && obj.command !== '') {
      return {
        result: compute(obj.result,obj.next,obj.command),
        next: '',
        command: ''
      }
    }
    // 已经得到result但是继续按等于号， 只返回结果
    if (obj.next === '') {
      return {
        result: obj.result
      }
    }
  }
  // 小数输入
  if(btnValue === '.') {
    if (obj.next !== '') {
      if (obj.next.includes('.')) {
        // 多重.输入
        return {}
      }
      return { next: obj.next + "." };
    }
    // next 为空时 点击.返回 0.
    return { next: '0.' }
  }
  if (btnValue === "%") {
    // 运算结束的结果 进行%运算 情况
    if (obj.result !== '' && obj.next === '') {
      // const result = compute(obj.result, obj.next, obj.command);
      return {
        result: String(Number(obj.result)/100),
        next: '',
        command: '',
      };
    }
    // 中途对值进行百分比运算
    if (obj.next !== '') {
      return {
        next: (Number(obj.next)/100).toString()        
      };
    }
    return {};
  }
  // 四则运算 command存在的话进行
  if (obj.command !== '') {
    return {
      result: compute(obj.result,obj.next, obj.command),
      next: '',
      command: btnValue,
    }
  }
  // 保留command
  if (obj.next === '') {
    return {command: btnValue}
  }
  // 如果不是特殊按键, result=next next='' 保留命令
  return {
    result: obj.next,
    next: '',
    command: btnValue
  }

}
