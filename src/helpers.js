export const createPassword = (options, length=6) => {
    let chars = 'abcdefghijklmnopqrstuvwxyz'

    if (options.includes('capital')) {
        chars += chars.toLocaleUpperCase()
    }

    if (options.includes('number')) {
        chars += '0123456789'
    }

    if (options.includes('symbol')) {
        chars += '!@#$&*()-=_+,./<>?[]{}%'
    }

    let password = ''
    for (let i=0; i<length; i++)
        password +=  chars[Math.floor(Math.random() * chars.length)]

    return password
}

export const copyText = text => {
    const dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = text
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    alert('Copied Password!')
}