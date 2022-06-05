export const getBackgroundName = (index: number) => {
  switch (index) {
    case 0:
      return 'Office';

    case 1:
      return 'Space';

    case 2:
      return 'Noise';

    case 3:
      return 'Meeting Room';

    case 4:
      return 'Books';

    case 5:
      return 'Desk';
  }
};

export const getImages = () => [
  import('assets/background/office.svg'),
  import('assets/background/space.svg'),
  import('assets/background/noise.svg'),
  import('assets/background/meetingRoom.svg'),
  import('assets/background/books.svg'),
  import('assets/background/desk.svg'),
];
