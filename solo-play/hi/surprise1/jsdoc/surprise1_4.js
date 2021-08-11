/**
 * Check IP address is valid for the IP version
 * @function isValidIpAddress
 * @param {string} ipAddress - address to check whether it is valid for the version(ipVersion)
 * @param {number} ipVersion - version to test the ip address
 * @returns {boolean} true if the ip address is valid, false if the ip address is not valid for the version
 */
function isValidIpAddress(ipAddress, ipVersion) {
    /*
        파라메터에 따른 예외 처리문 추가
    */
   let is_ipv4 = false;
   let is_ipv6 = false;
    if (ipVersion === 4) {
        // TODO: Check IPv4
        let re_ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        is_ipv4 = re_ipv4.exec(ipAddress) ? true : false
        console.log(`is ipv4? ${is_ipv4}`)
    }
    else if (ipVersion === 6) {
        // TODO: Check IPv6    
        let re_ipv6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
        is_ipv6 = re_ipv6.exec(ipAddress) ? true : false
        console.log(`is ipv6? ${is_ipv6}`)
    }
    /*
        파라메터에 따른 예외 처리문 추가
    */
   if(is_ipv4 || is_ipv6) {
       return true;
   } else {
       return false;
   }
}

console.log(isValidIpAddress("192.168.0.2", 4))
console.log(isValidIpAddress("257.168.0.2", 4))

console.log(isValidIpAddress("1050:0000:0000:0000:0005:0600:300c:326b", 6))
console.log(isValidIpAddress("ff06::c3", 6))
console.log(isValidIpAddress("ff06:ff:c3", 6))