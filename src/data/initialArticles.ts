import { Article, Comment } from '../types/blog';

// Generated image assets from Phase 1
import heroArch from '../assets/images/hero_editorial_architecture_1790827856851.jpg';
import craftStudio from '../assets/images/craft_design_atelier_1790827875133.jpg';
import cognitionGallery from '../assets/images/cognition_digital_future_1790827889418.jpg';
import botanicalStudy from '../assets/images/botanical_specimen_study_1790827902708.jpg';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'arch-of-light',
    slug: 'the-architecture-of-light-concrete-monoliths',
    title: 'The Architecture of Light: How Concrete and Void Reclaim Contemplation',
    deck: 'Modernist structures are frequently accused of austere severity. Yet in the interplay between poured limestone aggregate and grazing solar angles, an ancient sanctuary emerges.',
    category: 'Architecture & Design',
    isLeadStory: true,
    isFeatured: true,
    coverImage: heroArch,
    coverCaption: 'Fig. 1 — South-facing cantilevered colonnade during autumn equinox, cast shadows measuring 14 meters across limestone pavers.',
    curatorNote: 'Selected for the Autumn Dispatches folio. Examines the sensory acoustics of unadorned architectural voids.',
    author: {
      name: 'Elena Rostova',
      role: 'Curator of Spatial Theory, Basel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Elena writes on brutalist rehabilitation, phenomenological acoustics, and civic sanctuaries across Central Europe.'
    },
    publishedAt: 'September 28, 2026',
    readTimeMinutes: 7,
    claps: 342,
    tags: ['Architecture', 'Brutalism', 'Spatial Theory', 'Lighting'],
    tableOfContents: [
      { id: 'the-solitude-of-mass', title: 'The Solitude of Mass' },
      { id: 'solar-geometry-as-clock', title: 'Solar Geometry as Clockwork' },
      { id: 'acoustic-dampening', title: 'Acoustic Stillness in Aggregate' },
      { id: 'the-civic-imperative', title: 'The Civic Imperative for Silence' }
    ],
    content: `When Louis Kahn observed that "the sun never knew how great it was until it struck the side of a building," he was not merely paying homage to radiant physics. He was pinpointing the fundamental contract of civic architecture: that mass exists to capture, calibrate, and honor intangible temporal flux.

In an epoch governed by pixelated restlessness and ephemeral glass curtain walls, the permanence of cast aggregate feels less like nostalgia and more like an act of radical civil defiance.

### The Solitude of Mass {#the-solitude-of-mass}

Walk into any uncompromised modernist pavilion during the late afternoon. The tactile density of the walls does not confine; it repels ambient metropolitan friction. Concrete possesses a specific thermal inertia—not solely thermodynamic, but psychological. You immediately register that the room was here half a century before your arrival, and will remain unbothered half a century hence.

> "A room without natural light is not a room. Light gives meaning to distance, texture to stone, and dignity to human stillness."

The eye, accustomed to scanning frantic hyperlinked surfaces, decelerates. It tracks the subtle strata of the wooden formwork imprinted twenty winters ago into the wet slurry—the knots of fir, the subtle irregularities of moisture escape.

### Solar Geometry as Clockwork {#solar-geometry-as-clockwork}

Consider how the south clerestory behaves. At 09:00, light enters as an incisive diagonal blade, slicing the dark floor. By noon, it pools into a calm, diffuse rectangular carpet. As twilight arrives, it turns incandescent amber, climbing the eastern perimeter wall until it dissolves into twilight indigo.

Here, time ceases to be an algorithmic progress bar or calendar ping. It returns to its planetary origin: orbital mechanics rendered in shadow and mineral dust.

### Acoustic Stillness in Aggregate {#acoustic-dampening}

We rarely discuss the sound of unpainted stone. Porous limestone aggregates and sand-blasted concrete baffles absorb mid-frequency chatter while sustaining a resonant low-frequency register. Footsteps carry weight; voices instinctively drop two octaves. 

1. **Mass attenuation**: Walls exceeding 40 centimeters absorb mechanical vibration.
2. **Surface porosity**: Micro-cavities in the pour dissipate flutter echoes.
3. **Volumetric volume**: High ceilings allow thoughts to escape without bouncing back uninvited.

This sensory composure allows human thought to lengthen. Where glass demands transparency and aluminum insists on speed, cast stone offers the shelter of patient mass.

### The Civic Imperative for Silence {#the-civic-imperative}

Why does this matter now? Because spaces that demand nothing from our attention are becoming endangered civic infrastructure. A commercial foyer wants your transaction; an open-plan office wants your surveillance; a public terminal wants your compliance.

An architectural void withholds demands. It simply offers light, floor, and sky—inviting the inhabitant to restore their own inner horizon.`
  },
  {
    id: 'craft-stoneware',
    slug: 'the-patience-of-mineral-clay-artisan-workshop',
    title: 'The Discipline of Stoneware: What Clay Teaches Us About Human Friction',
    deck: 'Inside a secluded Kyoto studio, a potter shapes vessels that take twelve weeks to cure. A meditation on tactile patience in an impatient world.',
    category: 'Cultural Theory',
    isLeadStory: false,
    isFeatured: true,
    coverImage: craftStudio,
    coverCaption: 'Fig. 2 — Hand-thrown grogged stoneware drying at 18 degrees Celsius on unplaned cedar planks.',
    curatorNote: 'A tactile field essay on materials, muscle memory, and the resistance of raw earth.',
    author: {
      name: 'Kenzo Takahashi',
      role: 'Contributing Essayist, Kyoto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      bio: 'Author of "The Unvarnished Line". Researcher in traditional Japanese craft cultures and wood-fired kiln chemistry.'
    },
    publishedAt: 'September 24, 2026',
    readTimeMinutes: 5,
    claps: 218,
    tags: ['Craft', 'Ceramics', 'Philosophy', 'Slow Culture'],
    tableOfContents: [
      { id: 'the-wheel-as-axis', title: 'The Wheel as Gravitational Axis' },
      { id: 'grogg-and-resistance', title: 'Grogg and Natural Resistance' },
      { id: 'wood-ash-alchemy', title: 'Wood Ash Alchemy' }
    ],
    content: `Before you touch the clay, you must balance your hips. If your spine carries tension from your morning commute, the vessel will twist on the wheel at forty revolutions per minute. The clay remembers every tremor.

In ceramics, there is no undo command. There is only compression, centering, and surrender to physics.

### The Wheel as Gravitational Axis {#the-wheel-as-axis}

Centering two kilograms of dense Shigaraki stoneware requires more leverage than muscle. You lean forward from the pelvis, locking your forearms into your thighs, and permit the rotating mound to discover stability against your unyielding palms.

The clay begins as centrifugal chaos. For the first sixty seconds, it fights your thumbs, throwing off slip and gritty water. Then, imperceptibly, the wobble vanishes. The clay transforms into a stationary vortex—so tranquil it appears frozen in motion.

> "A vessel is formed from clay, but its utility resides in the void within." — Lao Tzu

### Grogg and Natural Resistance {#grogg-and-resistance}

Grogg consists of pre-fired ceramic ground down into crushed granules, reintroduced into raw wet earth. It grants structural integrity to tall vessels, preventing collapse during drying.

It also scratches the fingertips. When pulling the walls upward, you feel every sharp millimeter of fired shard dragging against your skin. It is a reminder that beauty is not synonymous with frictionless smoothness. Smoothness often masks sterility; texture documents struggle.

### Wood Ash Alchemy {#wood-ash-alchemy}

In an anagama wood kiln, temperatures reach 1,300 degrees Celsius over four sleepless nights. Wood ash carried by drafting air melts directly onto the unglazed pots, forming natural celadon streaks and burnt rust flashes.

You surrender the outcome. You cannot micro-manage how the embers settle. The resulting bowl carries the fingerprints of flame, wind, and humility.`
  },
  {
    id: 'cognition-digital',
    slug: 'the-retrieval-of-deep-reading-in-the-hyperlink-age',
    title: 'The Retrieval of Deep Reading: Attention as an Embodied Sanctuary',
    deck: 'Cognitive neuroscientists and literary theorists investigate how paragraph structure shapes our capacity for sustained thought and democratic reason.',
    category: 'Technology & Society',
    isLeadStory: false,
    isFeatured: true,
    coverImage: cognitionGallery,
    coverCaption: 'Fig. 3 — Typographic light refraction in the Zentrum für Kunst und Medien installation, Karlsruhe.',
    curatorNote: 'Featured in our cognitive ecology series. Explores the tactile architecture of sustained reading.',
    author: {
      name: 'Dr. Clara Vane',
      role: 'Fellow in Cognitive Ecology, Oxford',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
      bio: 'Dr. Vane studies digital reading physiology, eye-saccade patterns, and the future of long-form typography.'
    },
    publishedAt: 'September 19, 2026',
    readTimeMinutes: 6,
    claps: 489,
    tags: ['Cognition', 'Deep Work', 'Typography', 'Technology'],
    tableOfContents: [
      { id: 'the-f-shaped-trap', title: 'The F-Shaped Scanning Trap' },
      { id: 'typographic-calm', title: 'Typographic Calm as Cognitive Buffer' },
      { id: 'the-return-to-measure', title: 'The Return to Reader Measure' }
    ],
    content: `When we scan digital interfaces, our retinas trace what usability researchers call the 'F-shaped pattern': two horizontal sweeps across the first few sentences, followed by a hasty vertical plunge along the left margin.

We are hunting for keywords, not entering a narrative. We are grazing, not digesting.

### The F-Shaped Scanning Trap {#the-f-shaped-trap}

The cost of this mechanical scanning is not merely literary; it is psychological. Sustained analytical empathy requires what Maryanne Wolf terms 'the reading brain circuit'—a delicate neural lattice that links visual decoding to deep memory retrieval, deductive inference, and moral discernment.

When an interface inundates the reader with flashing sidebars, algorithmic recommendations, and candy-colored alert badges, this circuit fractures within eight seconds.

> "To read deeply is to grant another consciousness temporary residency inside your skull without interruption."

### Typographic Calm as Cognitive Buffer {#typographic-calm}

Typography is not decorative layout; it is the cognitive operating system of prose. When line measure is held to sixty-five characters, eye muscles do not tire. When type possesses sufficient ascender height and generous optical leading, each sentence arrives with breathing room.

* Generous white margins create spatial calm.
* Hairline rules partition concepts without abrupt visual shocks.
* The absence of flashing banners honors reader agency.

### The Return to Reader Measure {#the-return-to-measure}

When an essay is given space to unfold across two thousand words, thoughts build upon foundational premises rather than breathless soundbites. Ideas are allowed their necessary caveats, their historical citations, and their unresolved tensions.

To read long-form prose today is to reclaim one's own sovereignty over time.`
  },
  {
    id: 'botanical-herbarium',
    slug: 'the-herbarium-monograph-scientific-poetry-of-flora',
    title: 'The Silent Linnaeus: Inside the World of Nineteenth-Century Herbaria',
    deck: 'Sheets of rag paper holding pressed alpine flora survive centuries of political revolutions. What the botanical specimen archive preserves beyond taxonomy.',
    category: 'Natural Sciences',
    isLeadStory: false,
    isFeatured: false,
    coverImage: botanicalStudy,
    coverCaption: 'Fig. 4 — Dryopteris filix-mas specimen collected July 1884, Valais Alps. Iron gall ink notations on rag vellum.',
    curatorNote: 'Archival dispatch from the Linnean Society collections. Includes historical preservation plates.',
    author: {
      name: 'Marcus H. Sterling',
      role: 'Botanical Historian, Kew Gardens',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
      bio: 'Curator of rare scientific manuscripts and alpine botanical collections spanning the 18th and 19th centuries.'
    },
    publishedAt: 'September 14, 2026',
    readTimeMinutes: 8,
    claps: 156,
    tags: ['Botanical', 'Archives', 'Natural History', 'Linnaeus'],
    tableOfContents: [
      { id: 'linen-paper-longevity', title: 'The Longevity of Rag Paper' },
      { id: 'botanical-notations', title: 'Iron Gall Ink and the Field Note' },
      { id: 'ecological-memory', title: 'Ecological Memory in Dried Stems' }
    ],
    content: `In the climate-controlled vaults of the Natural History Museum, drawers lined with camphor wood house four million dried plant specimens. Lift the tissue paper from an 18th-century folio, and you are greeted by an intact stem of *Campanula rotundifolia*, its violet petals pressed into whisper-thin parchment.

The specimen was gathered by a Swiss physician on a July morning in 1782. The French monarchy had seven years left to live; the Industrial Revolution was in its infancy. Yet the delicate filaments of the flower remain unaltered.

### The Longevity of Rag Paper {#linen-paper-longevity}

The secret to this preservation lies in the substrate. Nineteenth-century botanists pasted specimens onto handmade rag paper crafted from discarded linen garments. Free from wood-pulp acids and chlorine bleaches, linen rag does not brown, curl, or disintegrate.

> "A dried plant is not a corpse; it is an index entry in the autobiography of the earth."

The botanical specimen unites rigorous scientific inquiry with exquisite graphic composition. Stems are affixed with narrow strips of gummed linen tape, arranged so both the upper and lower surfaces of leaves remain visible to the microscopist.

### Iron Gall Ink and the Field Note {#botanical-notations}

In the bottom right quadrant of each sheet sits the label. Written with a steel dip pen in iron gall ink, the script records:

1. **Taxon**: Binomial nomenclature according to Linnaean classification.
2. **Altitude**: Exact elevation in meters above sea level.
3. **Soil Condition**: Decomposed schist, damp moraine gravel, or limestone crevice.
4. **Collector**: Hand-signed with the naturalist's personal cipher.

### Ecological Memory in Dried Stems {#ecological-memory}

Today, geneticists extract fragments of chloroplast DNA from these two-hundred-year-old dried leaves. They measure stomatal density to reconstruct atmospheric carbon levels prior to the steam engine.

What began as an austere exercise in Victorian natural history has evolved into our most sensitive barometer for planetary shifts.`
  },
  {
    id: 'craft-fiction-prose',
    slug: 'the-unforgiving-sentence-crafting-fiction-with-fewer-adjectives',
    title: 'The Unforgiving Sentence: Why Modern Prose Craves Verbs Over Adjectives',
    deck: 'From Chekhov to Joan Didion, the greatest prose stylists discover velocity by stripping sentences to their bare structural vertebrae.',
    category: 'Fiction & Craft',
    isLeadStory: false,
    isFeatured: false,
    coverImage: craftStudio,
    coverCaption: 'Fig. 5 — The craftsperson’s chisel mirrors the editor’s red pen: reduction yields clarity.',
    curatorNote: 'A craft masterclass on prose cadence, syntax compression, and narrative leverage.',
    author: {
      name: 'Elena Rostova',
      role: 'Curator of Spatial Theory, Basel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Elena writes on brutalist rehabilitation, phenomenological acoustics, and civic sanctuaries across Central Europe.'
    },
    publishedAt: 'September 08, 2026',
    readTimeMinutes: 4,
    claps: 295,
    tags: ['Writing', 'Craft', 'Prose Style', 'Literature'],
    tableOfContents: [
      { id: 'the-adjective-crutch', title: 'The Adjective as Crutch' },
      { id: 'cadence-and-breath', title: 'Cadence and Respiratory Meter' }
    ],
    content: `When a writer describes a room as "dark, mysterious, and eerily quiet," they have not created suspense. They have simply confessed that they do not know what the room smells like, what floorboard creaks underfoot, or what rustle stirs in the chimney.

Adjectives tell the reader how to feel. Verbs and concrete nouns construct the room and let the reader feel for themselves.

### The Adjective as Crutch {#the-adjective-crutch}

Anton Chekhov famously advised his brother: "Don't tell me the moon is shining; show me the glint of light on broken glass." 

The modifier is an apology for an imprecise noun. If you write "a large hound," you force two words to do the work of one. If you write "a mastiff," the reader instantly sees the broad dewlaps, the heavy chest, the deliberate stride.

### Cadence and Respiratory Meter {#cadence-and-breath}

Sentences are musical bars. A paragraph composed exclusively of eight-word sentences lulls the ear into monotony. A paragraph that interweaves a four-word declaration with a thirty-word subordinate clause sets a pulse.

Prose must breathe. When you edit, read your work aloud until your lungs register the commas.`
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    articleId: 'arch-of-light',
    authorName: 'Julian Thorne',
    content: 'The section on acoustic stillness is profoundly true. We spent three days studying Peter Zumthor’s Therme Vals last spring, and the way aggregate stone dampens human vocal anxiety is astonishing.',
    createdAt: '2 days ago',
    likes: 24
  },
  {
    id: 'c2',
    articleId: 'arch-of-light',
    authorName: 'Sophie Arnault',
    content: 'Louis Kahn’s quote about the sun striking the side of a building is one of the most sublime architectural insights ever uttered. Thank you for this exquisite essay.',
    createdAt: 'Yesterday',
    likes: 18
  },
  {
    id: 'c3',
    articleId: 'cognition-digital',
    authorName: 'Nadia Chen',
    content: 'Maryanne Wolf’s research on the reading brain completely transformed how I structure my classroom reading. The F-pattern is a survival tactic in an information deluge, but we have to consciously unlearn it.',
    createdAt: '3 days ago',
    likes: 31
  }
];
