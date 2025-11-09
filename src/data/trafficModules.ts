export interface Lesson {
  title: string;
  subtitle: string;
  type: "story" | "practice" | "checkpoint";
}

export interface TrafficModule {
  title: string;
  description: string;
  lessons: Lesson[];
}

export const trafficModules: TrafficModule[] = [
  {
    title: "Основы безопасности",
    description: "Начните свой путь к безопасному вождению",
    lessons: [
      { title: "Введение в ПДД", subtitle: "Зачем нужны правила", type: "story" },
      { title: "Дорожные знаки", subtitle: "Базовые знаки", type: "story" },
      { title: "Практика знаков", subtitle: "Закрепление", type: "practice" },
      { title: "Проверка модуля", subtitle: "Контрольный тест", type: "checkpoint" },
    ],
  },
  {
    title: "Сигналы светофора",
    description: "Изучите язык дорожных светофоров",
    lessons: [
      { title: "Светофоры", subtitle: "Виды светофоров", type: "story" },
      { title: "Регулировщик", subtitle: "Сигналы регулировщика", type: "story" },
      { title: "Приоритет сигналов", subtitle: "Что главнее?", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Дорожная разметка",
    description: "Понимайте каждую линию на дороге",
    lessons: [
      { title: "Горизонтальная разметка", subtitle: "Линии на дороге", type: "story" },
      { title: "Вертикальная разметка", subtitle: "Столбики и бордюры", type: "story" },
      { title: "Практика разметки", subtitle: "Закрепление", type: "practice" },
      { title: "Проверка знаний", subtitle: "Тест", type: "checkpoint" },
    ],
  },
  {
    title: "Маневрирование",
    description: "Научитесь уверенно управлять автомобилем",
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
    description: "Освойте правила проезда любых перекрестков",
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
    description: "Безопасность пешеходов - ваша ответственность",
    lessons: [
      { title: "Виды переходов", subtitle: "Типы переходов", type: "story" },
      { title: "Правила проезда", subtitle: "Уступи пешеходу", type: "story" },
      { title: "Остановки транспорта", subtitle: "Особые зоны", type: "story" },
      { title: "Практика", subtitle: "Упражнения", type: "practice" },
    ],
  },
  {
    title: "Скоростной режим",
    description: "Соблюдайте безопасную скорость движения",
    lessons: [
      { title: "Ограничения скорости", subtitle: "Лимиты скорости", type: "story" },
      { title: "В городе", subtitle: "Скорость в населенке", type: "story" },
      { title: "За городом", subtitle: "Загородные дороги", type: "story" },
      { title: "Проверка", subtitle: "Тест", type: "checkpoint" },
    ],
  },
  {
    title: "Обгон и опережение",
    description: "Безопасные маневры на дороге",
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
    description: "Правильно останавливайтесь и паркуйтесь",
    lessons: [
      { title: "Различия", subtitle: "Остановка vs стоянка", type: "story" },
      { title: "Где можно", subtitle: "Разрешенные места", type: "story" },
      { title: "Где нельзя", subtitle: "Запрещенные места", type: "story" },
      { title: "Проверка", subtitle: "Контрольный тест", type: "checkpoint" },
    ],
  },
  {
    title: "Экстренные ситуации",
    description: "Будьте готовы к непредвиденным обстоятельствам",
    lessons: [
      { title: "ДТП", subtitle: "Что делать при аварии", type: "story" },
      { title: "Первая помощь", subtitle: "Основы", type: "story" },
      { title: "Буксировка", subtitle: "Как буксировать", type: "story" },
      { title: "Итоговый тест", subtitle: "Финальная проверка", type: "checkpoint" },
    ],
  },
];
