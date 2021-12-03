import router from '@/router'

/**
 * 清除登录信息
 */
export const clearLoginInfo = () => {
    console.log('Clearing Login Information')
    localStorage.clear()
    router.options.isAddDynamicMenuRoutes = false
}

/**
 * 获取uuid
 */
export const getUUID = () => {
    // return Math.floor(Math.random() * (9999 - 1000)) + 1000
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
}

export const getLocal = (name) => {
    let param = localStorage.getItem(name);
    if (param == 'undefined' || !param) {
        return param
    }
    return JSON.parse(localStorage.getItem(name))
}

export const setLocal = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}

export const getSessionStorage = (name) => {
    return JSON.parse(sessionStorage.getItem(name))
}

export const setSessionStorage = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value))
}

// 时间
export const SwitchingTime = (timestamp, type) => {
    let Time, TimeStamp, Year, Month, Day, Hour, Minute, Second, Millisecond, Week;
    TimeStamp = timestamp ? new Date(timestamp) : new Date();
    Year = TimeStamp.getFullYear();
    Month = TimeStamp.getMonth() + 1 < 10 ? "0" + (TimeStamp.getMonth() + 1) : TimeStamp.getMonth() + 1;
    Day = TimeStamp.getDate() < 10 ? "0" + TimeStamp.getDate() : TimeStamp.getDate();
    Hour = TimeStamp.getHours() < 10 ? "0" + TimeStamp.getHours() : TimeStamp.getHours();
    Minute = TimeStamp.getMinutes() < 10 ? "0" + TimeStamp.getMinutes() : TimeStamp.getMinutes();
    Second = TimeStamp.getSeconds() < 10 ? "0" + TimeStamp.getSeconds() : TimeStamp.getSeconds();
    Millisecond = TimeStamp.getMilliseconds() < 10 ? "0" + TimeStamp.getMilliseconds() : TimeStamp.getMilliseconds();
    Week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][TimeStamp.getDay()];

    switch (type) {
        case 'Y':
            Time = Year;
            break;
        case 'M':
            Time = Year + '-' + Month;
            break;
        case 'D':
            Time = new Date(Year + '-' + Month + '-' + Day).getTime();
            break;
        case 'A':
            Time = Year + '-' + Month + '-' + Day;
            break;
        case 'Z':
            Time = Year + '-' + Month + '-' + Day + " " + "00:00:00";
            break;
        case 'W':
            Time = Year + '-' + Month + '-' + Day + " " + "23:59:59";
            break;
        case 'Ms':
            Time = Year + '-' + Month + '-' + Day + " " + Hour + ":" + Minute + ":" + Second + ":" + Millisecond;
            break;
        case 'S':
            Time = Year + '-' + Month + '-' + Day + " " + Hour + ":" + Minute + ":" + Second;
            break;
        case 'DD':
            Time = Week;
            break;
        case 'DM':
            Time = Year + '-' + Month + '-' + Day + " " + "09:00:00";
            break;
        case 'T':
            Time = Hour + ":" + Minute + ":" + Second;
            break;
        default:
            Time = Year + '-' + Month + '-' + Day;
    }
    return Time;
}

// 计算剩余时长
export const CalculateTheDate = (days) => {
    let dateTime = new Date();
    dateTime = dateTime.setDate(dateTime.getDate() + Number(days));
    return new Date(dateTime).getTime()
}

// 计算天数
export const CalculateNumberOfDays = (time) => {
    return Math.round(time / (1000 * 60 * 60 * 24))
}

// 计算毫秒数
export const CalculateTheDateDay = (time) => {
    return time * 24 * 60 * 60 * 1000
}

// 首字母大写
export const FirstLetter = (url) => {
    return url.charAt(0).toUpperCase() + url.slice(1);
}

// 
export const ScreenIn = (arr, key, val) => {
    return arr.filter(item => item[key] == val)[0][key];
}

// 计算折扣
export const ArithmeticalDiscount = (sum, amount, type) => {
    if (type === "%") {
        // return (amount / sum) * 100 + '%'
        let discount = Math.ceil(amount / sum * 100);
        return discount
    } else {
        let discount = Math.floor(amount / sum * 100);
        if (discount % 10 === 0)
            return discount / 10 + '折'
        return discount + '折'
    }
}

// 数据类型判断
export const typeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

// 