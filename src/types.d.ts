type WebsiteData = {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  header: {
    contact_button: string;
    cv_button: string;
  };
  about: {
    title: string;
    description: {
      p_1: string;
      p_2: string;
      p_3: string;
      p_4: string;
    };
    subtitle: string;
  };
  projects: {
    title: string;
    project_1: {
      title: string;
      desc: string;
      list: {
        item_1: string;
        item_2: string;
        item_3: string;
        item_4: string;
      };
      button_1: string;
      button_2: string;
    };
    project_2: {
      title: string;
      desc: string;
      list: {
        item_1: string;
        item_2: string;
        item_3: string;
        item_4: string;
        item_5: string;
      };
      button_1: string;
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
};

type FieldRequirements = {
  [key: string]: {
    condition: (value: string) => boolean;
    error: string | null;
  }[];
};
