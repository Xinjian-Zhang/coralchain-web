export default {
  title: 'CoralChain',
  subtitle: 'Visuaalne plokiahela õpetustööriistade kogum',
  menu: {
    home: '🏠Avaleht',
    getStarted: '🚀Alusta',
    learnBasics: '📚Õpi põhitõdesid',
    tryItOut: '🧪Proovi järele',
    aboutUs: '👀Meist',
  },
  footer: '© 2025 CoralChain. Xinjian Zhang – Tartu Ülikool',
  hello: 'Tere!',
  thisIs: 'See on...',
  school: 'Tartu Ülikool, Eesti',
  thanksToSupervisor: 'Eriline tänu minu juhendajale, <strong class="text-lg font-bold">dr Mubashar Iqbal</strong>ile!',
  copy: 'Kopeeri',
  copied: 'Kopeeritud!',

  tryText: {
    lab1: 'Eeldused',
    lab2: 'Paigaldamine ja käivitamine',
    lab3: 'Dockeri juurutamine (soovitatav)',
    t1: 'Saate käivitada <strong>CoralChaini</strong> oma masinas kohapeal.',
    t2: 'See on loodud <strong class="font-bold">Ruby</strong> ja <strong class="font-bold">Sinatra</strong> abil.',
    t3: 'Allpool on samm-sammuline juhend alustamiseks.',
    t4: 'Installige <strong>Ruby</strong> (soovitatav versioon: &ge; 3.2).',
    t5: 'Installige Ruby',
    t6: 'Installige <strong>Bundler</strong>, et hallata sõltuvusi <strong>Gem</strong> (Ruby paketihalduri) kaudu.',
    t7: 'Installige Bundler',
    t8: 'Klooni hoidla',
    t9: 'Sisestage projektikataloog',
    t10: 'Installige sõltuvused',
    t11: 'Käivita rakendus',
    t12: 'Kui olete alustanud, avage',
    t13: 'CoralChaini kiireks kogemiseks on soovitatav kasutada Dockerit selle kasutamiseks konteinerkeskkonnas.',
    t14: 'Ehitage ja käivitage konteiner',
    t15: 'Samamoodi avage'
  },
  basics: {
    blockchain: {
      title: "Plokiahel",
      summary: "Plokiahel on hajutatud pearaamat, mis koosneb krüptograafiliselt ühendatud plokkidest.",
      details: `Plokiahel on detsentraliseeritud ja muutmatu pearaamat, mis koosneb krüptograafiliselt seotud plokkidest.
Iga plokk sisaldab:
• Kinnitatud tehinguid
• Ajatemplit
• Eelmise ploki räsi

See tagab andmete terviklikkuse, jälgitavuse ja takistab võltsimist.

Põhimõisted:
- SHA-256
- Merkle puud
- Hajutatud konsensus`
    },
    node: {
      title: "Sõlm",
      summary: "Sõlm on plokiahela võrgus osaleja, kes salvestab andmeid ja rakendab reegleid.",
      details: `Sõlmed osalevad plokiahelas, tehes järgmist:
• Tehingute valideerimine ja edastamine
• Pearaamatu andmete salvestamine

Sõlmetüübid:
• Täissõlm: Salvestab kogu plokiahela ja valideerib plokke
• Kergsõlm: Salvestab osalised andmed, väiksem arvutuskoormus
• Valideerija/Kaevandaja: Pakub uusi plokke ja valideerib neid konsensuse kaudu`
    },
    consensus: {
      title: "Konsensus",
      summary: "Konsensusmehhanismid võimaldavad hajutatud sõlmedel nõustuda plokiahela olekus.",
      details: `Konsensus tagab, et kõik sõlmed on nõus plokiahela praeguse olekuga ilma keskse autoriteedita.

Konsensuse tüübid:
• Töö tõend (PoW): Kaevandajad lahendavad matemaatilisi ülesandeid (nt Bitcoin)
• Panuse tõend (PoS): Valideerijad valitakse panustatud varade põhjal (nt Ethereum 2.0)
• Autoriteedi tõend (PoA): Usaldusväärsed valideerijad hoiavad võrku töös (nt ettevõtete plokiahelad)

Igal mehhanismil on kompromissid energia, detsentraliseerituse ja kiiruse osas.`
    },
    gossip: {
      title: "Gossip-protokoll",
      summary: "Gossip-protokollid levitavad andmeid juhuslikult sõlmede vahel, nagu kuulujutud võrgus.",
      details: `Gossip-protokollis:
• Iga sõlm jagab uuendusi juhuslike kaaslastega
• Teave levib eksponentsiaalselt

See mudel:
• On vastupidav ja detsentraliseeritud
• Võimaldab kiiret plokkide/tehingute levikut
• Vähendab ühte tõrke punkti`
    },
    byzantine: {
      title: "Bütsantsi viga",
      summary: "Bütsantsi viga tähendab, et sõlm käitub juhuslikult või pahatahtlikult.",
      details: `Bütsantsi vead tekivad, kui sõlmed:
• Saadavad vastuolulist või vale teavet
• Püüavad konsensust häirida

BFT-algoritmid (nt PBFT, HotStuff, Tendermint) suudavad taluda kuni 1/3 rikkuvatest sõlmedest ja tagada võrgu korrektsuse.`
    },
    forks: {
      title: "Hargnemised (Forks)",
      summary: "Fork ehk hargnemine tähistab plokiahela ajaloo või protokolli lahknemist.",
      details: `Hargnemised tekivad:
• Vastandlike plokiettepanekute tõttu
• Protokolli uuenduste tõttu

Tüübid:
• Pehme hargnemine (Soft Fork): Ühilduvad uuendused
• Karm hargnemine (Hard Fork): Ühildumatu, loob uue ahela

Konsensusreeglid valivad tavaliselt kõige pikema kehtiva ahela.`
    },
    smartContracts: {
      title: "Tark leping",
      summary: "Tark leping on programm, mis täidab end plokiahelas automaatselt.",
      details: `Targad lepingud on muutumatud ja läbipaistvad skriptid, mis täidavad tingimusi, nagu:
• Maksekorraldused
• Tokenite väljastamine
• DAO haldamine

Programmeerimiskeeled: Solidity (Ethereum), Rust (Solana), Move (Aptos/Sui)`
    },
    hash: {
      title: "Räsi (Hash)",
      summary: "Räsifunktsioonid teisendavad sisendi fikseeritud suurusega väljundiks turvaliselt.",
      details: `Krüptograafiline räsifunktsioon:
• Kaardistab andmed → fikseeritud suurusega räsi
• On ühepoolne, kokkulangevusi välistav

Kasutus:
• Ploki terviklikkuse tagamine
• Merkle juured
• Digiallkirjad

Tuntud algoritmid: SHA-256, Keccak256`
    }
  },
  common: {
    expand: "Klõpsa, et avada ▼",
    collapse: "Klõpsa, et sulgeda ▲"
  },
  notFound: 'Lehte ei leitud',
  pageNotExist: 'Otsitavat lehte ei eksisteeri või see on teisaldatud.',
  backToHome: 'Tagasi avalehele',
  startText: {
    lab1: '1. Blokeeri toimingud ja kinnitamine',
    lab2: '2. Mitme sõlme interaktsioon ja sünkroonimine',
    lab3: '3. Konsensus ja võrgu simulatsioonn',
    lab4: 'Projekti plakat',
    t1: 'Looge ja kinnitage räsi lingiga plokke. Andmete muutmine rünnakute simuleerimiseks ja kinnitustulemuste vaatamiseks.',
    t2: 'Simuleerige sõltumatuid sõlmi (A, B, X), käivitage kahvlid, sisestage võltsahelad ja lahendage pikima kehtiva ahela reegli abil.',
    t3: 'Võrdle PoW, PoA ja PoS jõudlust võrdlusalustega. Simuleeri kuulujuttude levikut ja ekspordi katsetulemused.',
    d1: 'Plokkide loomine kahe konsensusmeetodi abil',
    d2: 'Plokiahela terviklikkuse kontrollimine',
    d3: 'Plokkide rikkumine ja verifitseerimine',
    d4: 'Plokkide loomine ja rikkumine Node A-s',
    d5: 'Ploki genereerimine Node B-s, millele järgneb pikima ahela sünkroonimine Node A-ga',
    d6: 'Bütsantsi sõlme X võltsa ahela loomine ja sõlme B saastamine',
    d7: 'Hargnemise simulatsioon sõlmes A ja sõlmes B',
    d8: 'Konsensuse jõudlus: iga konsensusmeetodi (PoW, PoA, PoS) kohta loodud 50 plokki',
    d9: 'PoW, PoA ja PoS võrdlus: 50 plokki iga mehhanismi kohta koos loomise aja analüüsiga',
    d10: 'Kaevandamisaeg PoW puhul: 10 plokki iga raskusastme kohta (1–5 eesnullide taset)',
    d11: 'Kuulujuttude leviku simulatsioon: ausate ja võltsitud sõnumite levik 7 sõlme vahel',
    nb: '* Märkus: kõik videod on vaiksed demonstratsiooni salvestised.',
    android: 'Android-seadmed ei toeta manustatud eelvaateid. Palun klõpsake alloleval lingil, et avada.',
    poster: 'Ava PDF-plakat'
  }
}