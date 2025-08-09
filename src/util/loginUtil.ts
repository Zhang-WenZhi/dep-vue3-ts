// 登录成功后，存储用户信息（包含token和过期时间）
export const loginSuccess = (token: string, expireIn: number) => {
  const userInfo = {
    token: token,
    expireTime: Date.now() + expireIn * 1000, // 假设expireIn是秒数
    // 可以添加其他用户信息，如用户名、角色等
  };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

// 工具函数：判断用户是否已登录
export const isLogin = (): boolean => {
  try {
    // 从localStorage获取登录信息
    const userInfo = localStorage.getItem('userInfo');
    
    // 如果没有用户信息，直接返回未登录
    if (!userInfo) {
      return false;
    }
    
    // 解析用户信息
    const parsedInfo = JSON.parse(userInfo);
    
    // 检查是否包含有效的token
    if (!parsedInfo.token) {
      return false;
    }
    
    // （可选）检查token是否过期
    if (parsedInfo.expireTime) {
      // 转换为时间戳进行比较（假设expireTime是毫秒级时间戳）
      const now = Date.now();
      if (now > parsedInfo.expireTime) {
        // token已过期，清除存储信息
        localStorage.removeItem('userInfo');
        return false;
      }
    }
    
    // 所有检查通过，视为已登录
    return true;
  } catch (error) {
    // 解析失败或其他错误，视为未登录
    console.error('登录状态检查失败:', error);
    return false;
  }
};