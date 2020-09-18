//Java Solution

class Solution {
    public String addStrings(String num1, String num2) {
        int p1 = num1.length() - 1;
        int p2 = num2.length() - 1;
        StringBuilder sb = new StringBuilder();
        int carry = 0;
        
        while (p1 >= 0 || p2 >= 0) {
            int a = (p1 >= 0) ? num1.charAt(p1--) - '0' : 0;
            int b = (p2 >= 0) ? num2.charAt(p2--) - '0' : 0;
            
            int sum = a + b + carry;
            sb.append(sum % 10);
            carry = sum / 10;
        }
        if (carry > 0) {
            sb.append(carry);
        }
        
        return sb.reverse().toString();
    }
}