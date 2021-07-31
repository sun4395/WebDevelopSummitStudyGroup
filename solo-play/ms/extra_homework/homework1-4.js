/**
 * IP Address 유효성을 검사하는 메소드
 *
 * @param {string} ipAddress 유효성을 검사하고자 하는 IP Address 를 입력합니다.
 * @param {string} ipVersion 유효성을 검사하고자 하는 IP Address 의 Version 을 입력합니다.
 * @returns {boolean} 유효한 경우 true 가, 유효하지 않은 경우 false 가 리턴됩니다.
 */
function isValidIpAddress(ipAddress, ipVersion) {
    if (typeof(ipAddress) != "string") {
        throw new Error("ipAddress must be string");
    }

    if (ipVersion === 4) {
        regExpIPv4 = RegExp("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
        return (regExpIPv4.test(ipAddress)) ? true : false;
    }
    else if (ipVersion === 6) {
        regExpIPv6 = RegExp("^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$");
        return (regExpIPv6.test(ipAddress)) ? true : false;
    }
    else {
        throw new Error("Wrong IP version");
    }
}