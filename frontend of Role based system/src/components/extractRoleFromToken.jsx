import { jwtDecode } from 'jwt-decode';

export function extractRoleFromToken(token) {
    try {
        console.log(token)
        const decoded = jwtDecode(token); 
        console.log("output of decoded jwt:",decoded)
        return decoded; 
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
}
