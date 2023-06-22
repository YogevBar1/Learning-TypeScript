class ArrayOperations {
    static getSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++)
            sum += arr[i];
        return sum;
    }
    static getAvg(arr) {
        const avg = this.getSum(arr) / arr.length;
        return avg;
    }
    static getMax(arr) {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++)
            if (max < arr[i])
                max = arr[i];
        return max;
    }
    static getMin(arr) {
        let min = Infinity;
        for (let i = 0; i < arr.length; i++)
            if (arr[i] < min)
                min = arr[i];
        return min;
    }
}
export default ArrayOperations;
