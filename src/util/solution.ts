/**
 * 验证单词是否符合特定格式要求
 * 
 * 有效单词需满足以下所有条件：
 * 1. 长度至少为 3 个字符
 * 2. 仅包含字母（大小写均可）和数字
 * 3. 必须同时包含至少一个元音字母（a, e, i, o, u，不区分大小写）
 * 4. 必须同时包含至少一个辅音字母（除元音外的字母，不区分大小写）
 * 
 * @param {string} word - 需要验证的单词字符串
 * @returns {boolean} 若单词符合所有条件则返回 true，否则返回 false
 * @example
 * isValid("apple"); // true（长度≥3，含元音a/e，辅音p/l，无非法字符）
 * isValid("ap"); // false（长度不足3）
 * isValid("123"); // false（无元音和辅音）
 * isValid("a1b"); // true（含元音a，辅音b，长度3）
 * isValid("a!b"); // false（包含感叹号非法字符）
 */
function isValid(word: string): boolean {
    // 检查长度是否至少为3
    if (word.length < 3) {
        return false;
    }
    
    let hasVowel = false;      // 标记是否包含元音
    let hasConsonant = false;  // 标记是否包含辅音
    
    for (const c of word) {
        // 检查是否为字母
        if (/[a-zA-Z]/.test(c)) {
            const lowerChar = c.toLowerCase();
            // 判断是否为元音
            if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        } 
        // 若不是字母也不是数字，则为非法字符
        else if (!/\d/.test(c)) {
            return false;
        }
    }
    
    // 必须同时包含元音和辅音
    return hasVowel && hasConsonant;
};
