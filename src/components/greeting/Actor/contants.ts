export const getActorName = (index: number) => {
  switch (index) {
    case 0:
      return 'Anna';

    case 1:
      return 'Yoyo';

    case 2:
      return 'Skye';

    case 3:
      return 'Mike';

    case 4:
      return 'Vincent';

    case 5:
      return 'Peter';

    case 6:
      return 'May';
  }
};

export const getActorImages = () => [
  import('assets/actors/actor1.svg'),
  import('assets/actors/actor2.svg'),
  import('assets/actors/actor3.svg'),
  import('assets/actors/actor4.svg'),
  import('assets/actors/actor5.svg'),
  import('assets/actors/actor6.svg'),
  import('assets/actors/actor7.svg'),
];
