/* 
 * Binary Search
 */

function binarySearch(seq, t) {
    let start = 0;
    let mid = 0;
    let end = seq.length - 1;
    
    while (start < end) {
      mid = Math.ceil((start + end) / 2);
      
      if (t === seq[start]) return start;
      if (t === seq[mid]) return mid;
      if (t === seq[end]) return end;
      
      if (t > mid) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    
    return -1;
}

module.exports = binarySearch;