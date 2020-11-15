import styles1 from './module1.css'
import styles2 from './module2.css'

export const testNum = 3
// 测试字符串
export const testStr = 'test'
/**
 * 测试函数
 * @param a
 * @param b
 */
export const testAdd: (a: number, b: number) => number = (
  a: number,
  b: number
): number => {
  return a + b
}

export const createHtml = () => {
  return `
  <div class=${styles1.head}>
    <div class=${styles1.body}>body</div>
  </div>
  <div class=${styles2.head}>
    <div class=${styles2.body}>body</div>
  </div>`
}
