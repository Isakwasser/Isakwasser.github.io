function getSignal(time = 1, f = 300, fs = 3000) {
  /*
   * Функция для получения серии прямоугольных импульсов
   * time - время
   * f - частота импульсов
   * fs - частота дискретизации
   */

  let ans = {
    // инициализация вывода
    signal: [],
    time: []
  };
  let currentImplement = 0; // инициализация номера отсчета

  while (currentImplement <= time * fs) {
    let current = 0;
    if (currentImplement % (fs / f) < fs / f / 2) {
      current = 1;
    }

    ans.signal.push(current);
    ans.time.push(currentImplement / fs);

    currentImplement++;
  }
  return ans;
}

export default getSignal;
