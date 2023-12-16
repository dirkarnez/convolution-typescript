function discreteConvolution(signal: number[], kernel: number[]): number[] {
  const signalLength = signal.length;
  const kernelLength = kernel.length;
  const resultLength = signalLength + kernelLength - 1;
  const result: number[] = Array(resultLength).fill(0);

  for (let i = 0; i < signalLength; i++) {
    for (let j = 0; j < kernelLength; j++) {
      result[i + j] += signal[i] * kernel[j];
    }
  }

  return result;
}

console.log(discreteConvolution([1, 2, 3], [4, 5, 6])); // [4, 13, 28, 27, 18] 
