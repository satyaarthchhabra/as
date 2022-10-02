export interface ChangeLogItem {
  title: string;
  description?: string;
}

export interface MetaData {
  name: string;
  version: string;
  releaseDate: string;
  changeLog: ChangeLogItem[];
  updateNotes: string;
}

export const metaData: MetaData = {
  name: "kingscreen",
  version: "1.1.0",
  releaseDate: "2022-04-17",
  changeLog: [
    {
      title: "Inspirational quotes",
      description:
        "Get inspired and motivated to work hard and achieve your goals. A new quote for you every hour.",
    },
    {
      title: "Todo list ",
      description:
        "embrace yourself by working on the most important thing under your schedule.",
    },
    {
      title: "Peace Player",
      description:
        "special player with curated list of speacial song to heal body and provide mental peace ",
    },
    {
      title: "Pomedoro timer",
      description:
        "A simple Pomodoro Timer app that will help you manage your time and let you focus on any tasks such as study.",
    },
    {
      title: "Bookmarks Manager",
      description:
        "A simple manager app that will help you manage your bookmarks.",
    },
  ],
  updateNotes:
    "Quote widget available under the 'Widget Options' in the settings menus.",
};
