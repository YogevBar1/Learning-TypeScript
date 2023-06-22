class ArrayOperations {
    public static getSum(arr: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr.length; i++)
            sum += arr[i];
        return sum;
    }

    public static getAvg(arr: number[]): number {
        const avg = this.getSum(arr) / arr.length;
        return avg;
    }

    public static getMax(arr: number[]): number {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++)
            if (max < arr[i])
                max = arr[i]
        return max;
    }

    public static getMin(arr: number[]): number {
        let min = Infinity;
        for (let i = 0; i < arr.length; i++)
            if (arr[i] < min)
                min = arr[i];
        return min;
    }

}

export default ArrayOperations;