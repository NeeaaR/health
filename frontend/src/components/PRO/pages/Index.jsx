import React from 'react';

import HorizontalNav4 from '../components/horizontal-navs/HorizontalNav4';
import Header3 from '../components/headers/Header3';
import HowItWorks2 from '../components/how-it-works/HowItWorks2';
import Features3 from '../components/features/Features3';
import Team1 from '../components/team/Team1';
import Testimonials2 from '../components/testimonials/Testimonials2';
import Footer3 from '../components/footers/Footer3';

const meta = {};

export default function Prohome() {
  return (
    <React.Fragment>
      <HorizontalNav4 content={null} />

      <Header3
        content={{
          header: 'Nouvelle application de sant\u00e9 !',
          description:
            'MyHealth est une nouvelle fa\u00e7on de prendre rendez-vous avec un practicien disponible !',
          'primary-action': 'REJOIGNEZ-NOUS',
          'secondary-action': 'EN SAVOIR PLUS',
        }}
      />

      <HowItWorks2
        content={{
          '02_header': 'Mise en place de MyHealth',
          '02_description':
            "Nous avons design\u00e9 un processus simple pour aider nos nouveaux partenaires \u00e0 s'installer chez nous",
          step1: 'Inscrivez-vous',
          'step1-desc':
            'Il vous faudra utiliser votre carte vitale afin de vous identifier sur votre plateforme enti\u00e8rement s\u00e9curis\u00e9e et chiffr\u00e9e ',
          step2: 'D\u00e9finissez vos disponibilit\u00e9s',
          'step2-desc':
            'Sur votrre page de profil, vous remplissez vos jours de disponibilit\u00e9s et nous nous chargeons du reste !',
          step3: 'Support continu',
          'step3-desc':
            "En cas de souci, n'h\u00e9sitez pas \u00e0 nous solliciter nous serons toujours ravi de vous aider \u00e0 n'importe quelle heure ",
        }}
      />

      <Features3
        content={{
          badge: 'NOUVELLE APPLICATION',
          header:
            "Trouver un rendez-vous n'a jamais \u00e9t\u00e9 aussi facile",
          'col1-header': 'Accessibili\u00e9',
          'col1-desc':
            'Nos services sont disponibles sur quatre sites ind\u00e9pendant en France afin de vous assurer une disponibilit\u00e9 de nos services sans interruption',
          'col2-header': 'S\u00e9curit\u00e9',
          'col2-desc':
            "Vos donn\u00e9es seront bien prot\u00e9g\u00e9es, nous mettons un point d'honneur sur la s\u00e9curit\u00e9 de nos utilisateurs, ainsi nous vous proposons la plus haute s\u00e9curit\u00e9 possible ",
          'col3-header': 'Rapidit\u00e9',
          'col4-header': 'Mondial',
          'col4-desc':
            'Notre service vous ai propos\u00e9 dans le monde, ainsi, o\u00f9 que vous soyez, vous pourrez toujours trouver un m\u00e9decin disponible.',
        }}
      />

      <Team1
        content={{
          header: "L'\u00e9quipe",
          description: 'Nous avons construit ce service',
          '01_name': 'Renaud Mardaye',
          '01_job': 'Directeur g\u00e9n\u00e9ral',
          '01_description':
            'Je crois fort en notre service ainsi que la s\u00e9curit\u00e9 mise en place',
          '02_name': 'Anis Ouahmidi',
          '02_job': 'Chef IT ',
          '02_description':
            "C'est un projet ambitieux, mais je pense que nous avons r\u00e9ussi notre pari",
          '03_name': 'Slimane David',
          '03_job': 'Chef IT',
          '03_description':
            'Vous ne trouverez pas un service plus rapide que le notre sur le march\u00e9 ',
        }}
      />

      <Testimonials2
        content={{
          header: 'Nos partenaires',
          logo1: '/images/Microsoft-Azure-Logo.svg',
          logo2: '/images/Orange-logo.svg',
          logo3: '/images/UbuntuCoF.svg',
          logo4: '/images/Vmware.svg',
          logo5: '/images/Oracle-logo.svg',
        }}
      />

      <Footer3
        content={{
          copy: '\u00a9 2023 MyHealth. All rights reserved.',
        }}
      />
    </React.Fragment>
  );
}

