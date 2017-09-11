module.exports.badges = {
  enableKillstreaks: true,

  registry: {
    // Manual badges
    test: {
      name: 'Test',
      description: 'Test badge, please ignore.',
      image: 'test.png',
      access: 'superadmin'
    },

    hideandseek: {
      name: 'Hide and Seek',
      description: 'Participated in the hide and seek side-mission',
      image: 'hide.png',
      access: 'admin'
    },

    // Automated badges
    infected: {
      name: 'Infected',
      description: 'Died in the zombie apocalypse',
      image: 'infected.png',
      access: 'internal'
    },
    antivirus: {
      name: 'Used AV',
      description: 'Used an antivirus to become human again',
      image: 'antivirus.png',
      access: 'internal'
    },
    oz: {
      name: 'OZ',
      description: 'Patient Zero',
      image: 'oz.png',
      access: 'internal'
    },
    earlyRiser: {
      name: 'Early Riser',
      description: 'Caught a human between 6 and 8 AM',
      image: 'earlyriser.png',
      access: 'internal'
    },
    missionNotOver: {
      name: 'After-Mission Casualty',
      description: 'Died between 11 PM and midnight',
      image: 'mission-not-over.png',
      access: 'internal'
    },
    badStart: {
      name: 'Red Shirt',
      description: 'Died on Sunday night',
      image: 'badstart.png',
      access: 'internal'
    },
    soClose: {
      name: 'So Close',
      description: 'Died from Thursday onward',
      image: 'close.png',
      access: 'internal'
    },
    quickTurnaround: {
      name: 'Quick Turnaround',
      description: 'Killed a human within an hour of becoming a zombie',
      image: 'quick.png',
      access: 'internal'
    },

    // Killstreaks
    streak2: {
      name: 'Double Kill',
      description: '2 kills within an hour',
      image: 'streak-2.png',
      access: 'internal'
    },
    streak3: {
      name: 'Triple Kill',
      description: '3 kills within an hour',
      image: 'streak-3.png',
      access: 'internal'
    },
    streak4: {
      name: 'Overkill',
      description: '4 kills within an hour',
      image: 'streak-4.png',
      access: 'internal'
    },
    streak5: {
      name: 'Killtacular',
      description: '5 kills within an hour',
      image: 'streak-5.png',
      access: 'internal'
    },
    streak6: {
      name: 'Killtrocity',
      description: '6 kills within an hour',
      image: 'streak-6.png',
      access: 'internal'
    },
    streak7: {
      name: 'Killmanjaro',
      description: '7 kills within an hour',
      image: 'streak-7.png',
      access: 'internal'
    },
    streak8: {
      name: 'Killtastrophy',
      description: '8 kills within an hour',
      image: 'streak-8.png',
      access: 'internal'
    },
    streak9: {
      name: 'Killpocalypse',
      description: '9 kills within an hour',
      image: 'streak-9.png',
      access: 'internal'
    },
    streak10: {
      name: 'Killionare',
      description: '10 kills within an hour',
      image: 'streak-10.png',
      access: 'internal'
    }
  }
};
