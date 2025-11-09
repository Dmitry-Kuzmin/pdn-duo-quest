export interface Lesson {
  title: string;
  subtitle: string;
  type: "story" | "practice" | "checkpoint";
}

export interface TrafficModule {
  title: string;
  lessons: Lesson[];
}

export const trafficModules: TrafficModule[] = [
  {
    title: "Основы безопасности",
    lessons: [
      { title: "Введение в ПДД", subtitle: "Зачем нужны правила", type: "story" },
      { title: "Дорожные знаки", subtitle: "Базовые знаки", type: "story" },
      { title: "Практика знаков", subtitle: "Закрепление", type: "practice" },
      { title: "Проверка модуля", subtitle: "Контрольный тест", type: "checkpoint" },
    ],
  },
  {
    title: "Сигналы светофора",
    lessons: [
      { title: "Светофоры", subtitle: "Виды светофоров", type: "story" },
      { title: "Регулировщик", subtitle: "Сигналы регулировщика", type: "story" },
      { title: "Приоритет сигналов", subtitle: "Что главнее?", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Дорожная разметка",
    lessons: [
      { title: "Горизонтальная разметка", subtitle: "Линии на дороге", type: "story" },
      { title: "Вертикальная разметка", subtitle: "Столбики и бордюры", type: "story" },
      { title: "Практика разметки", subtitle: "Закрепление", type: "practice" },
      { title: "Проверка знаний", subtitle: "Тест", type: "checkpoint" },
    ],
  },
  {
    title: "Маневрирование",
    lessons: [
      { title: "Начало движения", subtitle: "Выезд с места", type: "story" },
      { title: "Перестроение", subtitle: "Смена полосы", type: "story" },
      { title: "Повороты", subtitle: "Как поворачивать", type: "story" },
      { title: "Развороты", subtitle: "Безопасный разворот", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Проезд перекрестков",
    lessons: [
      { title: "Виды перекрестков", subtitle: "Типы пересечений", type: "story" },
      { title: "Нерегулируемые", subtitle: "Без светофора", type: "story" },
      { title: "Регулируемые", subtitle: "Со светофором", type: "story" },
      { title: "Круговое движение", subtitle: "Правила кругов", type: "story" },
      { title: "Проверка", subtitle: "Контрольный тест", type: "checkpoint" },
    ],
  },
  {
    title: "Пешеходные переходы",
    lessons: [
      { title: "Виды переходов", subtitle: "Типы переходов", type: "story" },
      { title: "Правила проезда", subtitle: "Уступи пешеходу", type: "story" },
      { title: "Остановки транспорта", subtitle: "Особые зоны", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Скоростной режим",
    lessons: [
      { title: "Ограничения скорости", subtitle: "Лимиты скорости", type: "story" },
      { title: "В городе", subtitle: "Скорость в населенке", type: "story" },
      { title: "За городом", subtitle: "Загородные дороги", type: "story" },
      { title: "Проверка", subtitle: "Тест", type: "checkpoint" },
    ],
  },
  {
    title: "Обгон и опережение",
    lessons: [
      { title: "Что такое обгон", subtitle: "Определение", type: "story" },
      { title: "Правила обгона", subtitle: "Как обгонять", type: "story" },
      { title: "Запреты", subtitle: "Где нельзя обгонять", type: "story" },
      { title: "Встречный разъезд", subtitle: "Узкая дорога", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Остановка и стоянка",
    lessons: [
      { title: "Различия", subtitle: "Остановка vs стоянка", type: "story" },
      { title: "Где можно", subtitle: "Разрешенные места", type: "story" },
      { title: "Где нельзя", subtitle: "Запрещенные места", type: "story" },
      { title: "Проверка", subtitle: "Контрольный тест", type: "checkpoint" },
    ],
  },
  {
    title: "Экстренные ситуации",
    lessons: [
      { title: "ДТП", subtitle: "Что делать при аварии", type: "story" },
      { title: "Первая помощь", subtitle: "Основы", type: "story" },
      { title: "Буксировка", subtitle: "Как буксировать", type: "story" },
      { title: "Итоговый тест", subtitle: "Финальная проверка", type: "checkpoint" },
    ],
  },
];
