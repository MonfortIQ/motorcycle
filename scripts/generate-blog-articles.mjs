import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const image = (name) => `assets/images/blog/${name}`;

const articles = [
  {
    slug: 'blog-custom-exhaust-fabrication', title: 'Why Custom Exhaust Fabrication Matters', category: 'Fabrication', cat: 'fabrication',
    image: image('custom-exhaust-fabrication.jpg'), alt: 'A fabricator fitting a custom motorcycle exhaust in the workshop', date: 'September 14, 2026', shortDate: 'Sep 14, 2026', reading: '8 min',
    excerpt: 'A well-built exhaust is shaped around the engine, chassis and rider. Routing, material, weld quality and heat control all affect the finished motorcycle.',
    intro: 'A custom exhaust is a working part of the engine package, not just a finishing detail. The header path, collector and silencer have to fit the frame while supporting the way the motorcycle is expected to run.',
    quote: 'Good exhaust work starts with the motorcycle on the bench and the rider’s brief in hand. The pipe should belong to both.',
    tags: ['Exhaust design', 'TIG welding', 'Fabrication', 'Heat management'], diagram: 'exhaust',
    sections: [
      ['geometry', 'Start with routing and engine geometry', 'We map the route from the exhaust port to the silencer before cutting tube. Primary length, bend radius and collector position are considered together with the engine’s usable rev range.', 'A clean route also respects service access. Oil filters, drain plugs, center stands and rear suspension should remain reachable after the system is fitted.'],
      ['materials', 'Choose material for the job', 'Stainless steel resists corrosion and keeps a bright finish, while mild steel is straightforward to repair and can be ceramic coated. Titanium saves weight but needs careful heat control and a suitable welding setup.', 'Wall thickness, tube diameter and finish should be chosen for the motorcycle’s use and maintenance plan, not appearance alone.'],
      ['welding', 'Protect the weld from the inside', 'Thin-wall stainless headers are commonly TIG welded with the tube interior shielded from oxygen. Back-purging helps prevent rough internal oxidation that can weaken a joint and disturb exhaust flow.', 'We tack the full assembly on the bike or a fixture, check every joint, then weld in a sequence that limits distortion.'],
      ['clearance', 'Plan for heat and movement', 'The exhaust needs clearance from brake lines, wiring, bodywork, boots and luggage. Heat shields and stand-off brackets can protect nearby parts without hiding the shape of the system.', 'Rubber mounts, engine movement and suspension travel matter too. We check the route through the full range of expected movement before signing it off.'],
      ['road-test', 'Finish with a road test', 'After installation we check for leaks, fastener movement and contact marks, then listen and inspect the system after a full heat cycle.', 'A road test confirms that the sound, throttle response and riding position match the brief. Any adjustment is made before the final finish is applied.']
    ],
    tips: ['Mock up the entire system before final welding.', 'Keep the collector accessible for future inspection.', 'Recheck fasteners after the first complete heat cycle.'],
    related: ['blog-tig-welding', 'blog-frame-fabrication', 'blog-engine-rebuild']
  },
  {
    slug: 'blog-motorcycle-suspension', title: 'Understanding Motorcycle Suspension Setup', category: 'Performance', cat: 'performance',
    image: image('suspension-setup.jpg'), alt: 'A technician setting up motorcycle rear suspension', date: 'September 8, 2026', shortDate: 'Sep 08, 2026', reading: '6 min',
    excerpt: 'Set rider sag first, then tune preload, compression and rebound around the motorcycle, rider weight and roads it will see.',
    intro: 'Suspension tuning becomes much easier when each adjustment has a purpose. A measured baseline lets us separate spring support from damping control and make changes that can be felt on the road.',
    quote: 'A useful suspension setup gives the tire room to follow the road while keeping the chassis calm under the rider.',
    tags: ['Suspension', 'Rider sag', 'Handling', 'Road test'], diagram: 'suspension',
    sections: [
      ['baseline', 'Record a repeatable baseline', 'We begin with tire pressures, linkage condition and fork alignment, then record the current clicker positions. Worn bearings or a binding fork can make any tuning session misleading.', 'The rider’s normal gear, luggage and fuel load are included because they change the working load on the springs.'],
      ['sag', 'Set sag for the rider', 'Static sag measures how far the motorcycle settles under its own weight. Rider sag adds the rider and gear. These measurements show whether spring rate and preload are in a useful range.', 'Preload changes the starting position of the spring; it does not make the spring itself stiffer. If the correct sag cannot be reached within sensible adjustment, the spring rate may be wrong.'],
      ['forks', 'Balance fork support and damping', 'Fork spring rate carries load through the stroke. Compression damping controls how quickly the fork compresses, while rebound damping controls how quickly it extends after a bump.', 'We make small changes and note them. Large adjustments hide cause and effect, especially when fork oil condition or air gap is already outside the service range.'],
      ['shock', 'Tune the rear shock as a system', 'The shock works with the linkage ratio, spring and tire. We check for bottoming, wallowing and loss of traction instead of chasing a clicker number from another motorcycle.', 'A shock that is too stiff can skip across rough pavement; one with too little rebound control may pack down over repeated bumps.'],
      ['road-test', 'Validate on familiar roads', 'A short route with a mix of smooth corners, braking and broken pavement makes comparison useful. We change one setting at a time and repeat the same section.', 'The final setup should remain predictable when the bike is hot, loaded and ridden at normal pace—not only feel firm in the workshop.']
    ],
    tips: ['Write down every adjustment before turning a clicker.', 'Set tire pressure and mechanical condition before tuning.', 'Use the rider’s actual gear and regular load when measuring sag.'],
    related: ['blog-brake-upgrades', 'blog-cafe-racer-vs-scrambler', 'blog-custom-build-planning']
  },
  {
    slug: 'blog-custom-build-planning', title: 'How We Plan a Complete Custom Motorcycle Build', category: 'Custom Builds', cat: 'builds',
    image: image('custom-build-planning.jpg'), alt: 'A custom motorcycle build being planned around a workshop frame jig', date: 'October 12, 2026', shortDate: 'Oct 12, 2026', reading: '7 min',
    excerpt: 'A complete build plan connects the rider’s brief to geometry, ergonomics, parts selection, fabrication milestones and a realistic road test.',
    intro: 'A cohesive custom motorcycle takes shape on paper before it reaches the lift. A clear brief gives the workshop a way to make design, engineering and budget decisions that support the same goal.',
    quote: 'The best build plan makes the motorcycle easier to ride, service and understand—not only easier to photograph.',
    tags: ['Custom builds', 'Planning', 'Ergonomics', 'Chassis'], diagram: 'planning',
    sections: [
      ['brief', 'Turn the idea into a build brief', 'We discuss how the motorcycle will be used, who will ride it, what must remain original and which changes matter most. Commute, touring and occasional track use lead to very different choices.', 'The brief also sets the project boundary: target budget, completion window, donor-bike condition and any parts the owner already wants to keep.'],
      ['ergonomics', 'Check the rider triangle', 'Seat, foot controls and handlebar position define the rider’s contact points. We use adjustable mock-ups to check reach, knee bend, wrist load and visibility before committing to permanent brackets.', 'A low clip-on or tall tracker bar can change the whole riding posture. Mocking up both sides helps the rider judge comfort while the changes are still easy to revise.'],
      ['geometry', 'Protect chassis geometry', 'Fork length, wheel size, tire profile and ride height all influence steering geometry. We record the donor motorcycle’s baseline and model proposed changes before cutting or welding the frame.', 'The build plan keeps trail, clearance and suspension travel in view so a visual change does not create a nervous or reluctant motorcycle.'],
      ['parts', 'Choose parts that work together', 'We confirm wheel, brake, electrical and engine components as a package. Mounting points, cable paths and service clearances are checked before parts are ordered.', 'A parts list with fitment notes reduces rework and helps separate required engineering from optional finish details.'],
      ['milestones', 'Schedule fabrication and testing', 'The workshop sequence moves from teardown and inspection to chassis work, mechanical assembly, wiring, finish, and commissioning. Each stage has a review point before the next one begins.', 'A final road test, fastener check and owner handover are part of the plan—not tasks left until the calendar is full.']
    ],
    tips: ['Photograph and measure the donor before disassembly.', 'Confirm critical parts before paint or powdercoat.', 'Leave time and budget for commissioning and revisions.'],
    related: ['blog-cafe-racer-vs-scrambler', 'blog-frame-fabrication', 'blog-restomod-vs-restoration']
  },
  {
    slug: 'blog-cafe-racer-vs-scrambler', title: 'Cafe Racer vs Scrambler: Which Build Is Right for You?', category: 'Custom Builds', cat: 'builds',
    image: image('cafe-racer-vs-scrambler.jpg'), alt: 'Cafe racer and scrambler motorcycles compared in the workshop', date: 'October 6, 2026', shortDate: 'Oct 06, 2026', reading: '5 min',
    excerpt: 'Compare riding posture, wheel and tire choices, suspension travel and everyday use before choosing a cafe racer or scrambler direction.',
    intro: 'Cafe racers and scramblers can share a donor motorcycle, but they ask different things of its chassis and rider. Choosing a direction starts with the roads you ride and the posture you enjoy.',
    quote: 'Choose the motorcycle you want to ride on a Tuesday, then give it the silhouette you want to see on Sunday.',
    tags: ['Cafe racer', 'Scrambler', 'Style', 'Ergonomics'], diagram: 'compare',
    sections: [
      ['purpose', 'Start with the roads you ride', 'A cafe racer suits paved roads, quick transitions and a more focused posture. A scrambler is built around rougher surfaces, broader control and the confidence to leave smooth pavement.', 'Neither label guarantees a specific performance. The donor, tires, suspension and workmanship determine what the finished machine can safely do.'],
      ['posture', 'Compare the riding position', 'Clip-ons and rear-set controls can lower the torso and fold the legs. A scrambler usually puts the rider more upright with wider bars and a comfortable standing position.', 'We mock up the reach and knee angle before drilling or welding brackets. The result should suit the rider’s proportions rather than copy a photo.'],
      ['wheels', 'Match wheels and tires to the surface', 'A cafe build often keeps a road-focused tire profile and wheel package for predictable cornering. A scrambler may use a different tread, stronger wheel protection and a setup chosen for loose surfaces.', 'Tire clearance, fender position and speed rating still matter. A knobby tread is not a substitute for suspension travel or ground clearance.'],
      ['suspension', 'Set travel and clearance honestly', 'Scrambler styling can suggest off-road use, so the suspension, sump protection, controls and exhaust route need to reflect that intention.', 'Cafe builds also need adequate travel and ground clearance. Lowering a motorcycle for a line in a photograph can reduce its ability to turn and absorb a bump.'],
      ['decision', 'Choose the build you will use', 'List your regular routes, passenger needs, luggage and storage before deciding. A mixed-use roadster may be a better starting point than forcing the donor into either style.', 'Once the use case is clear, the workshop can tune the stance and details without sacrificing the motorcycle’s core function.']
    ],
    tips: ['Sit on the donor with temporary bars and pegs before committing.', 'Choose tire construction for actual use, not appearance alone.', 'Keep comfort and maintenance access in the brief.'],
    related: ['blog-custom-build-planning', 'blog-motorcycle-suspension', 'blog-vintage-restoration']
  },
  {
    slug: 'blog-vintage-restoration', title: "Restoring a Motorcycle That Hasn't Run in Years", category: 'Restoration', cat: 'restoration',
    image: image('vintage-motorcycle-restoration.jpg'), alt: 'A vintage motorcycle being carefully restored in a workshop', date: 'September 28, 2026', shortDate: 'Sep 28, 2026', reading: '9 min',
    excerpt: 'A dormant motorcycle needs a careful inspection of its frame, fuel system, engine, brakes and wiring before anyone tries to start it.',
    intro: 'A motorcycle that has been parked for years is an inspection project before it becomes a starting project. The safest restoration begins by learning what time, moisture and storage have changed.',
    quote: 'A first start is a milestone only after the machine is ready to run safely and predictably.',
    tags: ['Restoration', 'Inspection', 'Vintage motorcycles', 'Commissioning'], diagram: 'restoration',
    sections: [
      ['inspect', 'Document before disassembly', 'We photograph the motorcycle from every side, note missing hardware and inspect the frame, steering head, swingarm and wheel alignment for cracks, corrosion or previous repairs.', 'A parts inventory prevents small original brackets and spacers from disappearing during teardown. It also helps us separate repairable components from unsafe ones.'],
      ['fluids', 'Make the engine safe to turn', 'Old fuel, contaminated oil and coolant can damage an engine during an attempted start. We drain fluids, inspect the fuel tank and check whether the crankshaft turns freely before adding a battery.', 'If the engine is stuck, force is not a diagnostic method. We investigate corrosion, valve position and cylinder condition before deciding whether it needs to come apart.'],
      ['chassis', 'Check frame, wheels and brakes', 'Rust around seams, bent mounts and damaged bearings deserve attention before cosmetic work. We inspect rims, spokes, tires, brake hoses, calipers and master cylinders as safety items.', 'A motorcycle may roll while still having brakes that are unsafe under load. Rebuild or replace parts according to their condition and availability.'],
      ['electrical', 'Trace the electrical system', 'We inspect the harness for brittle insulation, poor repairs, corroded connectors and missing grounds. Charging and ignition components are tested individually so faults do not get hidden by a fresh battery.', 'Original wiring can often be repaired, but safety, reliability and parts support guide the decision to restore or replace a loom.'],
      ['commission', 'Reassemble and test in stages', 'After mechanical work, we verify fuel delivery, oil pressure, ignition timing and charging output in a controlled sequence. Initial running time is kept short while leaks and abnormal noises are checked.', 'Road testing follows brake, steering and tire checks. We re-inspect fasteners and fluid levels after the first heat cycles.']
    ],
    tips: ['Do not energize a corroded or damaged loom before inspection.', 'Photograph routing and hardware as each assembly comes apart.', 'Make safety-critical repairs before paint and polish.'],
    related: ['blog-restomod-vs-restoration', 'blog-vintage-wiring', 'blog-engine-rebuild']
  },
  {
    slug: 'blog-engine-rebuild', title: 'What Goes Into a Full Motorcycle Engine Rebuild?', category: 'Workshop', cat: 'workshop',
    image: image('details/clean-engine-build.jpg'), alt: 'A rebuilt motorcycle engine being assembled on a clean bench', date: 'September 21, 2026', shortDate: 'Sep 21, 2026', reading: '8 min',
    excerpt: 'A reliable rebuild depends on clean measurement, careful machine work, correct clearances and a documented assembly process.',
    intro: 'A full engine rebuild is a chain of measurements and decisions. The goal is not simply to replace worn parts; it is to understand why the engine wore and return every assembly to a known condition.',
    quote: 'The most valuable tool in an engine rebuild is a measurement recorded before the part is cleaned away.',
    tags: ['Engine rebuild', 'Machine work', 'Measurement', 'Workshop'], diagram: 'engine',
    sections: [
      ['strip', 'Inspect as the engine comes apart', 'We label components and record timing marks, fastener locations and evidence of previous work. Oil passages, filters and screens can reveal debris that points to a bearing or lubrication problem.', 'Parts are cleaned only after their original condition has been documented. That history helps explain the failure and guides the rebuild plan.'],
      ['measure', 'Measure before ordering parts', 'Cylinder bore, piston clearance, crank journals, valve guides and bearing surfaces are checked against the manufacturer’s service limits.', 'Measurements determine whether a part can be reused, machined or replaced. Guessing at clearances can shorten the life of a fresh build.'],
      ['machine', 'Coordinate machine work', 'Boring, honing, head work and crankshaft service need to match the selected pistons, rings and bearings. We confirm the specification with the machine shop before parts are finished.', 'Cleanliness after machining is critical. Abrasive residue left in an oil gallery can damage a new bearing almost immediately.'],
      ['assemble', 'Build with controlled clearances', 'The cases and components are assembled in a clean environment with measured bearing and end-float clearances. Fasteners are torqued in sequence and critical values are recorded.', 'Oil pumps, relief valves, oilways and timing marks receive separate checks before the covers are closed.'],
      ['run-in', 'Commission and monitor the engine', 'Before first start we prime lubrication, verify ignition and fuel settings, and check for leaks. The initial run follows the selected ring and camshaft break-in procedure.', 'Oil condition, temperature and valve clearances are inspected again after the first service interval. A rebuild is complete when the engine proves itself in use.']
    ],
    tips: ['Keep measured parts paired and labeled.', 'Confirm piston and ring specifications before machine work.', 'Clean galleries after every machining operation.'],
    related: ['blog-vintage-restoration', 'blog-custom-exhaust-fabrication', 'blog-tig-welding']
  },
  {
    slug: 'blog-tig-welding', title: 'TIG Welding in Custom Motorcycle Fabrication', category: 'Fabrication', cat: 'fabrication',
    image: image('details/tig-frame-alignment.jpg'), alt: 'A fabricator checking a motorcycle frame fixture during TIG work', date: 'September 18, 2026', shortDate: 'Sep 18, 2026', reading: '7 min',
    excerpt: 'TIG welding gives a fabricator control over thin motorcycle tubing, but joint fit, material preparation and fixture strategy matter just as much.',
    intro: 'TIG welding is valued for its control and clean finish, especially on thin-wall motorcycle components. A strong result depends on preparation and fit-up before the arc is struck.',
    quote: 'A neat bead cannot rescue a poorly fitted joint. Accuracy starts at the cut and the fixture.',
    tags: ['TIG welding', 'Fabrication', 'Frame work', 'Joint prep'], diagram: 'welding',
    sections: [
      ['prep', 'Prepare the joint and material', 'We remove paint, oxide, oil and plating from the joint area, then check the cut for square and consistent fit. Clean filler rod and a suitable joint gap help keep the weld predictable.', 'Different alloys and wall thicknesses need different heat input and filler choices. Material identification comes before setup.'],
      ['fixture', 'Control alignment in a fixture', 'Motorcycle frames can move as welds cool. We use measured fixtures and a balanced tack sequence to preserve steering-head, swingarm-pivot and engine-mount relationships.', 'Measurements are repeated after tacking and after welding. If a part moves, the cause is found before the next assembly depends on it.'],
      ['technique', 'Match the process to the tube', 'Torch angle, travel speed, amperage and filler addition are adjusted for the joint and position. Thin tube rewards a steady hand and consistent arc length.', 'Practice coupons made from matching material can confirm the setup before a visible or structural weld is attempted.'],
      ['inspection', 'Inspect the finished joint', 'We look for cracks, undercut, incomplete fusion, contamination and distortion. Structural areas are reviewed against the design and the intended load path.', 'Appearance is one observation, not proof by itself. Critical parts may need additional inspection or a qualified review depending on use and regulations.'],
      ['finish', 'Protect and document the work', 'After inspection, the weld area is cleaned and prepared for paint or coating. We keep photographs and measurements with the project notes.', 'Good documentation helps later service and keeps future modifications from cutting into an unknown structural area.']
    ],
    tips: ['Use matching scrap to confirm settings on unfamiliar material.', 'Keep filler, tungsten and joint surfaces clean.', 'Recheck frame datum points after the final weld sequence.'],
    related: ['blog-custom-exhaust-fabrication', 'blog-frame-fabrication', 'blog-custom-build-planning']
  },
  {
    slug: 'blog-custom-paint', title: 'Choosing the Right Finish for a Custom Motorcycle', category: 'Finishing', cat: 'finishing',
    image: image('paint-finish-guide.jpg'), alt: 'A painter applying a deep metallic finish to a motorcycle fuel tank', date: 'August 10, 2026', shortDate: 'Aug 10, 2026', reading: '5 min',
    excerpt: 'Compare paint systems by substrate, use, repairability, heat exposure and the care the finish will need after delivery.',
    intro: 'A finish should suit the motorcycle’s surfaces and the way it will be used. Gloss, satin, metallic and durable coatings each make different demands on preparation, repair and maintenance.',
    quote: 'The finish is only as consistent as the surface underneath it.',
    tags: ['Custom paint', 'Finishing', 'Coatings', 'Preparation'], diagram: 'paint',
    sections: [
      ['brief', 'Decide what the finish must do', 'We start with the rider’s preference for gloss, texture and color, then consider fuel exposure, weather, engine heat and how often the bike will be cleaned.', 'A show finish and a hard-used commuter may call for different levels of correction and protection. The maintenance plan belongs in the decision.'],
      ['substrate', 'Prepare each substrate correctly', 'Steel, aluminum, fiberglass and previously painted parts need different preparation. Contamination, corrosion and incompatible coatings can undermine an otherwise careful topcoat.', 'We test uncertain old finishes and repair dents or seams before primer. Skipping preparation usually makes defects more visible after color.'],
      ['systems', 'Compare coating systems', 'Two-stage basecoat and clearcoat offers depth and can support repair work. Single-stage systems can suit simpler designs. Ceramic and powder coatings have specific uses and are not interchangeable with every paint system.', 'For tanks and heat-exposed parts, chemical resistance and the manufacturer’s cure procedure are part of the specification.'],
      ['color', 'Plan color and graphics together', 'Metallic orientation, candy layers and pinstripes respond to light differently. Test panels help establish the final shade and confirm how adjoining pieces will read together.', 'We record paint codes, mix information and layer sequence so future repairs can be matched more closely.'],
      ['care', 'Protect the finish after delivery', 'Fresh coatings need the recommended cure time before polishing, fuel exposure or chemical cleaning. We provide care guidance suited to the selected paint system.', 'Small stone chips are easier to manage when cleaned early. The right cloth and mild wash products help preserve the finish without flattening its sheen.']
    ],
    tips: ['Approve a test panel in daylight and workshop light.', 'Tell the painter about fuel and heat exposure before choosing a system.', 'Keep the product sheet and mix record with the build documentation.'],
    related: ['blog-custom-build-planning', 'blog-restomod-vs-restoration', 'blog-vintage-restoration']
  },
  {
    slug: 'blog-vintage-wiring', title: 'Restoring Vintage Motorcycle Wiring', category: 'Restoration', cat: 'restoration',
    image: image('behind-build-blackline.jpg'), alt: 'A motorcycle undergoing careful electrical and mechanical assembly in the workshop', date: 'August 3, 2026', shortDate: 'Aug 03, 2026', reading: '6 min',
    excerpt: 'A safe vintage loom starts with a circuit map, sound grounds, protected connections and a plan for charging, lighting and ignition loads.',
    intro: 'Vintage electrical faults often come from many small changes accumulated over decades. A methodical loom restoration makes the circuits understandable and gives each component a reliable return path.',
    quote: 'A wire that is the right color is helpful. A circuit that is labeled, protected and measured is dependable.',
    tags: ['Vintage wiring', 'Electrical', 'Restoration', 'Charging'], diagram: 'wiring',
    sections: [
      ['map', 'Map the existing circuits', 'Before removing a loom, we photograph connector locations and trace the actual wiring against the motorcycle’s diagram. Previous repairs may have changed colors or routing.', 'We label branches and note accessories, fuses and grounds. That map becomes the reference for repair or replacement.'],
      ['inspect', 'Find age-related failures', 'Brittle insulation, green copper, loose crimps, overheated connectors and pinched routing are common warning signs. Battery condition and charging output are checked alongside the loom.', 'A continuity test can identify an open wire, but it does not reveal a connection that fails under load. We inspect voltage drop where current matters.'],
      ['repair', 'Choose repair or replacement', 'A sound original harness may be repaired with correct terminals and insulation. A badly modified or heat-damaged loom is often safer to replace with a documented harness.', 'The goal is to preserve serviceability. Hidden splices and unsupported connectors make future troubleshooting harder.'],
      ['protect', 'Route and protect the loom', 'Wires need clearance from exhaust heat, steering stops, sharp edges and moving suspension. Grommets, sleeves and stable tie points protect the loom without making it impossible to service.', 'We leave enough slack at the steering head for full lock while keeping cables clear of the controls and brake line.'],
      ['test', 'Test every circuit under load', 'Before the tank and bodywork go back on, we check charging, ignition, lighting, brake switches and accessory circuits. Fuses and grounds are verified against the expected loads.', 'A final function check at idle and elevated rpm can reveal charging or vibration issues that a static continuity test will miss.']
    ],
    tips: ['Disconnect the battery before opening the loom.', 'Use proper crimp tools and terminals for the connector family.', 'Test charging voltage with the lights and accessories operating.'],
    related: ['blog-vintage-restoration', 'blog-engine-rebuild', 'blog-restomod-vs-restoration']
  },
  {
    slug: 'blog-brake-upgrades', title: 'Motorcycle Brake Upgrades Worth Considering', category: 'Performance', cat: 'performance',
    image: image('handling-upgrades.jpg'), alt: 'A technician inspecting motorcycle brake and handling components', date: 'July 27, 2026', shortDate: 'Jul 27, 2026', reading: '6 min',
    excerpt: 'Better braking starts with condition and setup. Match pads, rotor, master cylinder and tire grip to the motorcycle before adding parts.',
    intro: 'A worthwhile brake upgrade improves control and repeatability. The right solution depends on the current system, tire grip, rider feedback and the motorcycle’s intended use.',
    quote: 'Braking confidence comes from a balanced system that the rider can modulate, not the biggest rotor that fits.',
    tags: ['Brakes', 'Performance', 'Brake fluid', 'Safety'], diagram: 'brakes',
    sections: [
      ['inspect', 'Restore the baseline first', 'We inspect rotor thickness and runout, pad condition, caliper seals, hose age, master-cylinder operation and fluid condition before recommending a change.', 'A dragging caliper or contaminated pad can make a healthy design feel poor. Servicing the original system may solve the problem more effectively than adding hardware.'],
      ['feel', 'Choose lever feel and hydraulic ratio', 'Master-cylinder bore, caliper piston area and lever ratio influence travel and effort. A mismatch can make the lever wooden or leave it moving too close to the grip.', 'We select components as a hydraulic system and consider the rider’s hand strength and preferred feedback.'],
      ['friction', 'Match pads to the rotor and use', 'Pad compounds differ in cold bite, temperature range, wear and rotor compatibility. A track-oriented compound may be less effective during a cold wet commute.', 'New pads need proper bedding. The process transfers friction material evenly and helps stabilize performance.'],
      ['rotors', 'Consider rotor size and heat', 'A larger rotor can improve leverage and heat capacity, but it also changes unsprung weight and may require a caliper bracket, line change or wheel clearance check.', 'We check spoke, fork and fender clearance through rotation and suspension travel before approving the package.'],
      ['test', 'Bed in and test progressively', 'After installation we bleed the system, inspect for leaks and apply the specified bedding procedure in a safe area. Initial tests build brake temperature gradually.', 'We recheck fasteners, fluid level and lever feel after cooling. A brake change is not complete until the rider has tested it under controlled conditions.']
    ],
    tips: ['Replace aged brake fluid and inspect hoses before performance parts.', 'Never mix pad compounds without confirming rotor compatibility.', 'Test upgrades in a controlled area before normal traffic use.'],
    related: ['blog-motorcycle-suspension', 'blog-cafe-racer-vs-scrambler', 'blog-custom-build-planning']
  },
  {
    slug: 'blog-restomod-vs-restoration', title: 'Restomod vs Full Motorcycle Restoration', category: 'Restoration', cat: 'restoration',
    image: image('build-planning-related-thumb.jpg'), alt: 'A classic motorcycle being evaluated for a custom restomod build', date: 'July 19, 2026', shortDate: 'Jul 19, 2026', reading: '7 min',
    excerpt: 'A restoration preserves originality while a restomod adds selected modern improvements. The right path depends on history, use and ownership goals.',
    intro: 'Restoration and restomod projects can begin with the same motorcycle but finish with different priorities. Decide what should remain original before parts are sourced or removed.',
    quote: 'The best brief is clear about which history to preserve and which compromises the owner is ready to change.',
    tags: ['Restomod', 'Restoration', 'Originality', 'Project planning'], diagram: 'restomod',
    sections: [
      ['goals', 'Define the ownership goal', 'A period-correct restoration may prioritize factory finishes, correct hardware and provenance. A restomod may keep the character of the motorcycle while improving starting, lighting, brakes or suspension.', 'Neither approach is automatically more valuable or reliable. The condition, rarity and documentation of the donor influence the decision.'],
      ['originality', 'Document what is original', 'Before teardown, we record frame numbers, castings, paint evidence, markings and unusual components. Those details can affect a restoration’s historical value.', 'When originality matters, repairable factory parts may be more important than convenient replacements. Owners should approve irreversible changes in advance.'],
      ['upgrades', 'Choose upgrades with a reason', 'A restomod can benefit from modern tires, improved lighting, charging capacity or braking components when they suit the motorcycle and are integrated carefully.', 'Visible upgrades should not compromise fit, service access or the machine’s intended use. We make a list of gains and trade-offs before selecting parts.'],
      ['budget', 'Compare scope and parts sourcing', 'Restoration may need scarce original components and specialist finish work. A restomod may require engineering, fabrication and validation of newer parts.', 'Both paths benefit from a documented budget with contingency for hidden wear discovered during disassembly.'],
      ['handover', 'Keep the result serviceable', 'A clear parts record, wiring diagram and before-and-after photographs help preserve the project history. For a restomod, record every non-original system and service requirement.', 'A successful handover explains what changed, why it changed and how to maintain the motorcycle.']
    ],
    tips: ['Record numbers and original finishes before cleaning.', 'Get approval before cutting, drilling or discarding original parts.', 'Keep a parts and modification log for the next owner or mechanic.'],
    related: ['blog-vintage-restoration', 'blog-vintage-wiring', 'blog-custom-build-planning']
  },
  {
    slug: 'blog-frame-fabrication', title: 'Inside Our Motorcycle Frame Fabrication Process', category: 'Fabrication', cat: 'fabrication',
    image: image('details/custom-chassis-planning-hero.jpg'), alt: 'A motorcycle chassis aligned on a frame fixture before fabrication', date: 'July 12, 2026', shortDate: 'Jul 12, 2026', reading: '8 min',
    excerpt: 'Frame changes begin with measured datums, a load-path plan and fixture control, followed by inspection before the motorcycle is assembled.',
    intro: 'Frame fabrication is structural work. Even a small change to a mount or rear loop can affect alignment, load transfer and the way the motorcycle behaves under braking and cornering.',
    quote: 'The fixture is not there to make the frame look straight. It holds the measurements that let us prove it is straight.',
    tags: ['Frame fabrication', 'Chassis', 'Fixtures', 'TIG welding'], diagram: 'frame',
    sections: [
      ['measure', 'Establish chassis datums', 'We record steering-head, swingarm-pivot and axle relationships from the donor before any material is removed. The frame is checked for existing damage and prior repairs.', 'These datums give the fabrication a reliable reference. Visual symmetry alone cannot confirm that the wheels and suspension will track correctly.'],
      ['design', 'Design the load path', 'A frame change needs a clear reason and a load path that transfers force into appropriate members. We consider rider weight, engine torque, suspension loads and attachment points.', 'A rear loop or accessory mount should not place an abrupt stress concentration into thin tube. Reinforcement must be designed, not added by guesswork.'],
      ['fixture', 'Fixture the frame before cutting', 'The frame is supported at known points in a jig. Components are dry-fitted where possible so tank, seat, wheel, chain and suspension clearances are visible.', 'Tack welds hold the planned position while we recheck measurements. Controlled sequencing limits distortion as the joints are completed.'],
      ['weld', 'Fit, weld and inspect', 'Tube ends are prepared for consistent contact and the material is identified before welding. The weld process and filler are selected for the joint and wall thickness.', 'After welding, we inspect joint quality and remeasure chassis points. Coating begins only after the structure passes its review.'],
      ['assembly', 'Verify fit with the real components', 'The engine, swingarm, suspension and wheels are installed or test-fitted to check chain line, alignment, full travel and service access.', 'A final assembly check catches interference before finish and road testing. The build record keeps the dimensions available for future service.']
    ],
    tips: ['Measure the donor frame before disassembly.', 'Check full suspension travel and steering lock during mock-up.', 'Keep structural inspection notes with the build records.'],
    related: ['blog-tig-welding', 'blog-custom-build-planning', 'blog-custom-exhaust-fabrication']
  }
];

const diagramContent = {
  exhaust: '<path d="M45 58h38l24 35 24-35h40"/><path d="M45 74h28l25 37 27-37h46"/><path d="M84 58v16m47-16v16"/><path d="M172 58v33h35"/><circle cx="102" cy="93" r="4"/><circle cx="102" cy="111" r="4"/>',
  suspension: '<path d="M76 26v86m19-86v86m-19-70h19m-19 54h19"/><path d="M145 28v20l-12 8 24 10-24 10 24 10-24 10 12 8v18"/><circle cx="85" cy="121" r="8"/><circle cx="145" cy="121" r="8"/>',
  planning: '<circle cx="56" cy="104" r="22"/><circle cx="178" cy="104" r="22"/><path d="M56 104l36-42 37 42H56m37-42h37l48 42m-84-42 13-19h29l14 19m-55 42 13 17h25l10-17"/><path d="M101 34v-9m-6 4h12"/>',
  compare: '<circle cx="57" cy="105" r="18"/><circle cx="115" cy="105" r="18"/><path d="M57 105l18-35 22 35H57m18-35h20l20 35m-20-35 7-14h18l9 14"/><circle cx="167" cy="105" r="18"/><circle cx="219" cy="105" r="18"/><path d="M167 105l14-31 26 31h-40m14-31h22l20 31m-37-31 7-12h16l10 12"/>',
  restoration: '<circle cx="95" cy="78" r="35"/><path d="M95 56v24l17 12m-17-14 19-18"/><path d="M151 55h48m-48 22h48m-48 22h34"/><path d="M46 117h170"/><path d="M59 44l8 8m72 58 8 8"/>',
  engine: '<path d="M78 34h60v18l14 12v44H64V64l14-12z"/><path d="M86 36h44m-36 28h28v26H94zM107 40v16m-9 38v12m18-12v12"/><path d="M54 74h10m94 0h15m-15 22h15"/><circle cx="108" cy="78" r="8"/>',
  welding: '<path d="M64 40h78l24 25-24 25H64z"/><path d="M166 65h36m-82 25v23m-18-23v23m36-23v23"/><path d="M191 53l-9 12 10 8-12 11"/><path d="M83 54h38m-38 10h27"/><circle cx="154" cy="65" r="5"/>',
  paint: '<rect x="44" y="48" width="44" height="65" rx="5"/><rect x="96" y="48" width="44" height="65" rx="5"/><rect x="148" y="48" width="44" height="65" rx="5"/><path d="M54 66h24m-24 10h24m-24 10h16M106 66h24m-24 10h24m-24 10h16M158 66h24m-24 10h24m-24 10h16"/><path d="M47 124h144"/>',
  wiring: '<rect x="52" y="42" width="46" height="32" rx="4"/><rect x="158" y="42" width="46" height="32" rx="4"/><circle cx="128" cy="104" r="18"/><path d="M98 58h26v29m34-29h-18v29m-42-13v31h30m30-31v31h-14m-39 14h64"/><path d="M64 54h20m84 0h20"/>',
  brakes: '<circle cx="112" cy="82" r="46"/><circle cx="112" cy="82" r="15"/><circle cx="112" cy="44" r="3"/><circle cx="145" cy="65" r="3"/><circle cx="132" cy="116" r="3"/><circle cx="91" cy="116" r="3"/><circle cx="78" cy="65" r="3"/><path d="M151 52h32v48h-28l-11-14V67z"/><path d="M183 62h17m-17 27h17"/>',
  restomod: '<path d="M128 32v96"/><path d="M49 57h62m-62 20h62m-62 20h62"/><path d="M146 57h62m-62 20h62m-62 20h62"/><circle cx="64" cy="52" r="5"/><circle cx="82" cy="72" r="5"/><circle cx="98" cy="92" r="5"/><path d="M151 108h52m-52 12h34"/>',
  frame: '<circle cx="58" cy="104" r="19"/><circle cx="188" cy="104" r="19"/><path d="M58 104l32-50 45 50H58m32-50h39l59 50m-104-50 8-20h32l15 20m-43 50 23 21h35l13-21"/><path d="M90 54l14 50m25-50-28 50"/>'
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const titleCase = (value) => value.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const imageTag = (src, alt, className = '') => `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}"${className ? ` class="${className}"` : ''} loading="lazy" decoding="async">`;

function cardMarkup(article) {
  const compactClass = article.slug === 'blog-frame-fabrication' ? ' blog-card-hide-1024' : '';
  return `            <article class="col-md-6 blog-card-item${compactClass}" data-cat="${article.cat}" data-search="${escapeHtml([article.category, ...article.tags].join(' '))}">
              <div class="blog-card">
                <div class="blog-img-wrap">
                  <a href="${article.slug}.html" aria-label="Read ${escapeHtml(article.title)}">${imageTag(article.image, article.alt)}</a>
                  <span class="blog-category-tag">${escapeHtml(article.category)}</span>
                </div>
                <div class="blog-card-body">
                  <div class="blog-meta"><span><i class="bi bi-calendar" aria-hidden="true"></i> ${article.shortDate}</span><span><i class="bi bi-clock" aria-hidden="true"></i> ${article.reading}</span></div>
                  <h3 class="blog-title"><a href="${article.slug}.html">${escapeHtml(article.title)}</a></h3>
                  <p class="blog-excerpt">${escapeHtml(article.excerpt)}</p>
                  <a href="${article.slug}.html" class="link-arrow">Read Article <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
                </div>
                <a class="blog-card-overlay" href="${article.slug}.html" aria-label="Open ${escapeHtml(article.title)}"></a>
              </div>
            </article>`;
}

function tocMarkup(article) {
  return article.sections.map(([id, heading], index) => `<li><a href="#${id}"><span>${String(index + 1).padStart(2, '0')}</span>${escapeHtml(heading)}</a></li>`).join('\n');
}

function articleContentMarkup(article) {
  const sections = article.sections.map(([id, heading, first, second]) => `
            <section class="article-section" id="${id}">
              <h2>${escapeHtml(heading)}</h2>
              <p>${escapeHtml(first)}</p>
              <p>${escapeHtml(second)}</p>
            </section>`).join('\n');
  const tips = article.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('\n');
  const tags = article.tags.map((tag) => `<a href="blog.html?q=${encodeURIComponent(tag)}" class="article-tag">${escapeHtml(tag)}</a>`).join('\n');
  const diagram = `<figure class="article-diagram my-5">
              <svg viewBox="0 0 256 160" role="img" aria-label="Workshop illustration for ${escapeHtml(article.title)}" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${diagramContent[article.diagram]}</g>
              </svg>
              <figcaption>${escapeHtml(article.category)} / Workshop reference</figcaption>
            </figure>`;
  const midpoint = Math.floor(article.sections.length / 2);
  const sectionsWithVisual = sections.split('\n            <section').map((block, index) => index === midpoint ? `${diagram}\n            <section${block}` : (index === 0 ? block : `\n            <section${block}`)).join('');
  const related = article.related.map((slug) => articles.find((item) => item.slug === slug)).filter(Boolean).slice(0, 3);
  const relatedMarkup = related.map((item) => `<a class="related-article" href="${item.slug}.html">
                ${imageTag(item.image, item.alt)}
                <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.category)} · ${item.reading}</small></span>
              </a>`).join('\n');
  const index = articles.indexOf(article);
  const previous = articles[(index - 1 + articles.length) % articles.length];
  const next = articles[(index + 1) % articles.length];
  const pageUrl = `${article.slug}.html`;

  return `  <section class="section-padding article-layout">
    <div class="container">
      <div class="row g-5">
        <article class="col-lg-8 article-main">
          <figure class="editorial-img-frame article-hero-image mb-4">${imageTag(article.image, article.alt)}</figure>
          <p class="lead text-muted">${escapeHtml(article.intro)}</p>
          <nav class="article-toc" aria-label="Table of contents">
            <h2>In this article</h2>
            <ol>${tocMarkup(article)}</ol>
          </nav>
          <div class="article-prose">${sectionsWithVisual}
            <figure class="article-quote">
              <blockquote>“${escapeHtml(article.quote)}”</blockquote>
              <figcaption>Apex &amp; Iron Workshop</figcaption>
            </figure>
            <section class="article-workshop-tips" aria-labelledby="workshopTipsTitle">
              <h2 id="workshopTipsTitle">Workshop checklist</h2>
              <ul>${tips}</ul>
            </section>
          </div>
          <div class="article-end matter-row">
            <div class="article-tags" aria-label="Article topics">${tags}</div>
            <div class="article-share" aria-label="Share this article">
              <a href="https://www.facebook.com/sharer/sharer.php" data-share="facebook" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://twitter.com/intent/tweet" data-share="x" target="_blank" rel="noopener noreferrer" aria-label="Share on X"><i class="bi bi-twitter-x"></i></a>
              <button type="button" class="article-copy-link" data-copy-link="${pageUrl}" aria-label="Copy article link"><i class="bi bi-link-45deg"></i><span class="visually-hidden">Copy link</span></button>
            </div>
          </div>
          <p class="article-copy-feedback text-muted" aria-live="polite" hidden>Article link copied.</p>
          <nav class="article-prev-next" aria-label="More articles">
            <a href="${previous.slug}.html" class="article-previous"><small><i class="bi bi-arrow-left" aria-hidden="true"></i> Previous</small><strong>${escapeHtml(previous.title)}</strong></a>
            <a href="${next.slug}.html" class="article-next"><small>Next <i class="bi bi-arrow-right" aria-hidden="true"></i></small><strong>${escapeHtml(next.title)}</strong></a>
          </nav>
        </article>
        <aside class="col-lg-4 article-sidebar">
          <div class="p-4 rounded bg-card border border-subtle mb-4">
            <h2 class="h5 text-white font-heading mb-3">Search The Journal</h2>
            <form class="blog-search-form" action="blog.html" method="get" role="search"><div class="input-group"><input type="search" name="q" class="form-control" placeholder="Search articles..." aria-label="Search articles"><button class="btn btn-apex" type="submit" aria-label="Search articles"><i class="bi bi-search"></i></button></div></form>
          </div>
          <div class="p-4 rounded bg-card border border-subtle mb-4">
            <h2 class="h5 text-white font-heading mb-3">Related Articles</h2>
            <div class="related-article-list">${relatedMarkup}</div>
          </div>
          <div class="p-4 rounded bg-card border border-subtle mb-4">
            <h2 class="h5 text-white font-heading mb-3">About the author</h2>
            <p class="text-muted mb-2">Apex &amp; Iron Workshop</p>
            <p class="fs-8 text-muted mb-0">Notes from the builders, fabricators and mechanics who plan, restore and test the motorcycles in our shop.</p>
          </div>
          <div class="p-4 rounded bg-surface-elevated border border-strong text-center">
            <i class="bi bi-wrench-adjustable fs-1 text-warning mb-2 d-block" aria-hidden="true"></i>
            <h2 class="h5 text-white font-heading mb-2">Have a motorcycle project in mind?</h2>
            <p class="fs-8 text-muted mb-4">Tell us about your build, restoration or fabrication project.</p>
            <a href="contact.html" class="btn-apex w-100"><span>Start Your Project</span><i class="bi bi-arrow-right" aria-hidden="true"></i></a>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}

function buildPage(base, article) {
  const description = article.excerpt;
  const headEnd = base.indexOf('</head>');
  const originalHead = base.slice(0, headEnd);
  const head = originalHead
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(article.title)} | Apex &amp; Iron Journal</title>`)
    .replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace(/<meta name="keywords" content="[^"]*">/i, `<meta name="keywords" content="${escapeHtml(article.tags.join(', ').toLowerCase())}">`)
    .replace(/\s*<link rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<meta property="og:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title,
    description, image: article.image, datePublished: new Date(`${article.date} 00:00:00 UTC`).toISOString(),
    author: { '@type': 'Organization', name: 'Apex & Iron Workshop' },
    publisher: { '@type': 'Organization', name: 'Apex & Iron Co.' },
    mainEntityOfPage: article.slug + '.html'
  };
  const seo = `\n  <link rel="canonical" href="${article.slug}.html">\n  <meta property="og:type" content="article">\n  <meta property="og:title" content="${escapeHtml(article.title)} | Apex &amp; Iron Journal">\n  <meta property="og:description" content="${escapeHtml(description)}">\n  <meta property="og:image" content="${escapeHtml(article.image)}">\n  <meta property="og:url" content="${article.slug}.html">\n  <script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>\n`;
  const bodyStart = base.indexOf('<body>') + '<body>'.length;
  const bodyMarker = '  <!-- ==========================================================================\n       SITE HEADER & NAVIGATION';
  const bodyEnd = base.indexOf(bodyMarker, bodyStart);
  const footerMarker = '  <!-- ==========================================================================\n       SITE FOOTER';
  const footerStart = base.indexOf(footerMarker);
  const footerEnd = base.indexOf('</body>', footerStart);
  const sharedHeader = base.slice(bodyStart, bodyEnd).trimEnd();
  const footer = base.slice(footerStart, footerEnd);
  const hero = `\n  <section class="page-hero article-page-hero">
    <div class="container">
      <nav aria-label="Breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item"><a href="blog.html">Blog</a></li><li class="breadcrumb-item active" aria-current="page">${escapeHtml(article.title)}</li></ol></nav>
      <div class="sub-tag"><i class="bi bi-journal-text" aria-hidden="true"></i> ${escapeHtml(article.category)}</div>
      <h1 class="display-4 fw-bold mb-3 font-heading">${escapeHtml(article.title)}</h1>
      <p class="lead text-muted max-w-700">${escapeHtml(article.excerpt)}</p>
      <div class="article-meta d-flex flex-wrap align-items-center gap-4 text-muted font-mono fs-8"><span><i class="bi bi-person text-warning" aria-hidden="true"></i> Apex &amp; Iron Workshop</span><span><i class="bi bi-calendar3 text-warning" aria-hidden="true"></i> ${article.date}</span><span><i class="bi bi-clock text-warning" aria-hidden="true"></i> ${article.reading} read</span></div>
    </div>
  </section>\n`;
  const copyHandler = `\n  <script>
    document.querySelectorAll('[data-share]').forEach((link) => {
      const url = encodeURIComponent(window.location.href);
      link.href = link.dataset.share === 'facebook'
        ? 'https://www.facebook.com/sharer/sharer.php?u=' + url
        : 'https://twitter.com/intent/tweet?url=' + url + '&text=' + encodeURIComponent(document.title);
    });
    document.querySelectorAll('.article-copy-link').forEach((button) => button.addEventListener('click', async () => {
      const feedback = document.querySelector('.article-copy-feedback');
      const url = new URL(button.dataset.copyLink, window.location.href).href;
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(url);
        else {
          const field = document.createElement('textarea'); field.value = url; field.setAttribute('readonly', '');
          field.style.position = 'fixed'; field.style.opacity = '0'; document.body.appendChild(field); field.select();
          const copied = document.execCommand('copy'); field.remove(); if (!copied) throw new Error('Copy was blocked');
        }
        if (feedback) { feedback.hidden = false; feedback.textContent = 'Article link copied.'; }
      } catch {
        if (feedback) { feedback.hidden = false; feedback.textContent = 'Copy failed. Select and copy this link: ' + url; }
      }
    }));
  </script>\n`;
  return `${head}${seo}</head><body>${sharedHeader}${hero}${articleContentMarkup(article)}\n${footer}${copyHandler}</body></html>\n`;
}

function updateBlogIndex(base) {
  let html = base;
  const gridStart = html.indexOf('<div class="row g-4" id="blogGrid">');
  const gridEndMarker = '\n          </div>\n\n        </div>\n\n        <!-- Sidebar Column -->';
  const gridEnd = html.indexOf(gridEndMarker, gridStart);
  if (gridStart < 0 || gridEnd < 0) throw new Error('Could not locate the journal card grid in blog.html');
  const grid = `<div class="row g-4" id="blogGrid">\n${articles.map(cardMarkup).join('\n')}\n            <div class="col-12 text-muted d-none" id="blogNoResults" role="status">No journal articles match your search.</div>\n          </div>`;
  html = html.slice(0, gridStart) + grid + html.slice(gridEnd + '\n          </div>'.length);
  html = html.replace('Articles Grid (9 Articles)', 'Articles Grid (12 Articles)');

  const categories = [
    ['all', 'All Topics', articles.length],
    ['builds', 'Custom Builds', 'builds'],
    ['restoration', 'Restoration', 'restoration'],
    ['fabrication', 'Fabrication', 'fabrication'],
    ['performance', 'Performance', 'performance'],
    ['workshop', 'Workshop', 'workshop'],
    ['finishing', 'Finishing', 'finishing']
  ].map(([cat, label, value]) => {
    const count = typeof value === 'number' ? value : articles.filter((article) => article.cat === value).length;
    return `<li class="mb-2"><a href="#" class="blog-filter-cat ${cat === 'all' ? 'text-warning active' : 'text-muted'}" data-cat="${cat}">${label} (${count})</a></li>`;
  }).join('\n');
  const categoryBlock = `<!-- Categories Widget -->\n          <div class="p-4 rounded bg-card border border-subtle mb-4">\n            <h5 class="text-white font-heading mb-3">Categories</h5>\n            <ul class="list-unstyled mb-0 font-mono fs-8">\n              ${categories}\n            </ul>\n          </div>\n\n          `;
  html = html.replace(/<!-- Categories Widget -->[\s\S]*?(?=<!-- Recent Posts Widget -->)/, categoryBlock);

  const recent = [articles[0], articles[1], articles[2]].map((article) => `              <div class="d-flex align-items-center gap-3">
                ${imageTag(article.image, article.alt, 'recent-post-thumb rounded')}
                <div><a href="${article.slug}.html" class="text-white font-heading fs-8 d-block mb-1">${escapeHtml(article.title)}</a><small class="text-muted font-mono fs-8">${article.shortDate}</small></div>
              </div>`).join('\n');
  const recentBlock = `<!-- Recent Posts Widget -->\n          <div class="p-4 rounded bg-card border border-subtle mb-4">\n            <h5 class="text-white font-heading mb-3">Recent Posts</h5>\n            <div class="d-flex flex-column gap-3">\n${recent}\n            </div>\n          </div>\n\n          `;
  html = html.replace(/<!-- Recent Posts Widget -->[\s\S]*?(?=<!-- Tags Cloud -->)/, recentBlock);
  return html;
}

function updateHomeLinks(html) {
  const links = ['blog-custom-build-planning.html', 'blog-cafe-racer-vs-scrambler.html', 'blog-custom-exhaust-fabrication.html'];
  let index = 0;
  return html.replace(/href="blog-details\.html"/g, () => `href="${links[Math.floor(index++ / 2)] || links[0]}"`);
}

const templatePath = path.join(root, 'scripts', 'blog-article-template.html');
if (!fs.existsSync(templatePath)) {
  const legacyArticle = fs.readFileSync(path.join(root, 'blog-details.html'), 'utf8');
  if (!legacyArticle.includes('SITE HEADER & NAVIGATION')) throw new Error('Original blog details template is missing.');
  fs.writeFileSync(templatePath, legacyArticle, 'utf8');
}
const baseArticle = fs.readFileSync(templatePath, 'utf8');
for (const article of articles) {
  fs.writeFileSync(path.join(root, `${article.slug}.html`), buildPage(baseArticle, article), 'utf8');
}
fs.writeFileSync(path.join(root, 'blog.html'), updateBlogIndex(fs.readFileSync(path.join(root, 'blog.html'), 'utf8')), 'utf8');
const homePath = path.join(root, 'index.html');
fs.writeFileSync(homePath, updateHomeLinks(fs.readFileSync(homePath, 'utf8')), 'utf8');
fs.writeFileSync(path.join(root, 'blog-details.html'), `<!DOCTYPE html>\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=blog-custom-build-planning.html"><link rel="canonical" href="blog-custom-build-planning.html"><title>Journal Article | Apex &amp; Iron</title></head><body><p>This journal article has moved. <a href="blog-custom-build-planning.html">Continue to the custom build planning article</a>.</p></body></html>\n`, 'utf8');

console.log(`Generated ${articles.length} article pages and updated the blog index.`);
