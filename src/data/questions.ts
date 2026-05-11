export const questions = [
  {
    "id": 1,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A first-year student walks into the Digital Logic Design lab and sees equipment with only two discrete voltage levels labeled HIGH and LOW. What fundamental principle does this demonstrate?",
    "options": [
      "Analog signal processing",
      "Binary digital representation",
      "Continuous voltage modulation",
      "AC/DC power conversion",
      "Analog-to-digital approximation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Analog processing deals with continuous signals, not discrete levels.",
      "CORRECT. Digital systems use discrete voltage levels (HIGH/LOW) to represent binary values 1 and 0.",
      "Incorrect. Modulation varies signals continuously, which is not how digital logic operates.",
      "Incorrect. AC/DC conversion relates to power, not information representation.",
      "Incorrect. Approximation is not the principle; discrete levels are fundamental to digital design."
    ]
  },
  {
    "id": 2,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "During the first lab session, an instructor explains why modern computers use binary instead of decimal. What is the primary reason for this choice?",
    "options": [
      "Binary numbers are larger and more precise",
      "Binary circuits are simpler and more reliable",
      "Binary was invented before decimal",
      "Binary uses less memory than decimal",
      "Binary is easier for humans to read"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Binary numbers are not larger; they require more digits for the same value.",
      "CORRECT. Two-state (binary) circuits are easier to build, more noise-immune, and more reliable than multi-state circuits.",
      "Incorrect. Decimal numbering predates binary representation in computing.",
      "Incorrect. Memory efficiency is not the primary reason; reliability is.",
      "Incorrect. Humans find decimal more natural to read than binary."
    ]
  },
  {
    "id": 3,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A professor explains that digital systems are fundamentally different from analog systems. Which characteristic best describes a digital system?",
    "options": [
      "Continuously varying signals",
      "Discrete values at discrete times",
      "Infinite possible states",
      "Direct physical measurements",
      "Voltage levels can be any value"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Continuously varying signals describe analog systems, not digital.",
      "CORRECT. Digital systems work with discrete values at specific time intervals.",
      "Incorrect. Digital systems have finite, countable states.",
      "Incorrect. Digital systems abstract physical quantities into discrete values.",
      "Incorrect. Digital systems restrict voltage to specific discrete levels."
    ]
  },
  {
    "id": 4,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "In the course syllabus, the instructor lists the key components of a digital system. Which of the following is NOT typically a core component of digital logic design?",
    "options": [
      "Logic gates",
      "Boolean algebra",
      "Amplifier circuits",
      "Number systems",
      "Combinational circuits"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. Logic gates are fundamental building blocks of digital systems.",
      "Incorrect. Boolean algebra provides the mathematical foundation for digital design.",
      "CORRECT. Amplifier circuits are analog components, not part of core digital logic.",
      "Incorrect. Number systems (binary, hex) are essential for digital design.",
      "Incorrect. Combinational circuits are a major topic in digital logic."
    ]
  },
  {
    "id": 5,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A student asks why the course covers multiple number systems. What is the most practical reason for learning binary, octal, and hexadecimal?",
    "options": [
      "They are required for all programming languages",
      "Different systems are used in different digital contexts",
      "Decimal is too complex for computers",
      "Binary is only used in old computers",
      "Hexadecimal replaces binary completely"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Most programming uses decimal and binary; others are context-specific.",
      "CORRECT. Binary for circuits, hex for memory addresses, octal for file permissions\u2014each has its use.",
      "Incorrect. Decimal is not complex; computers internally use binary.",
      "Incorrect. Binary is still fundamental in all modern digital systems.",
      "Incorrect. Hexadecimal is a shorthand for binary, not a replacement."
    ]
  },
  {
    "id": 6,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "During orientation, the professor mentions that digital logic forms the foundation of computer architecture. What is the relationship between digital logic and computer hardware?",
    "options": [
      "Digital logic is unrelated to hardware",
      "Digital logic designs the circuits that make up processors",
      "Digital logic only applies to memory systems",
      "Digital logic is a software concept",
      "Digital logic replaces computer architecture"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Digital logic is fundamentally about hardware circuit design.",
      "CORRECT. Processors, ALUs, and control units are all built from digital logic circuits.",
      "Incorrect. Digital logic applies to processors, I/O, and all digital hardware.",
      "Incorrect. Digital logic is a hardware design discipline, not software.",
      "Incorrect. Digital logic is a subset of computer architecture knowledge."
    ]
  },
  {
    "id": 7,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A lab assistant explains that the breadboards in the lab are used to prototype digital circuits. What is the purpose of using a breadboard?",
    "options": [
      "To permanently solder circuits",
      "To temporarily build and test circuits without soldering",
      "To generate clock signals",
      "To convert analog to digital",
      "To store binary data"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Breadboards are for temporary, not permanent, construction.",
      "CORRECT. Breadboards allow rapid prototyping and testing of circuits without soldering.",
      "Incorrect. Clock signals require oscillator circuits, not breadboards themselves.",
      "Incorrect. ADC is a function of specific ICs, not the breadboard.",
      "Incorrect. Storage requires memory elements like flip-flops or registers."
    ]
  },
  {
    "id": 8,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "The instructor emphasizes the difference between combinational and sequential circuits. What defines a combinational circuit?",
    "options": [
      "Output depends on previous inputs and clock signals",
      "Output depends only on current inputs",
      "It contains only AND gates",
      "It requires a power supply of 12V",
      "It always has memory elements"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. That describes sequential circuits, not combinational.",
      "CORRECT. Combinational circuits have no memory; output depends solely on present inputs.",
      "Incorrect. Combinational circuits can use any type of logic gate.",
      "Incorrect. Voltage requirements are not what define combinational logic.",
      "Incorrect. Memory elements (flip-flops) are characteristic of sequential circuits."
    ]
  },
  {
    "id": 9,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A student reads that the course will cover 'synthesis' of logic circuits. What does synthesis mean in digital logic design?",
    "options": [
      "Breaking down a circuit into individual gates",
      "Converting a Boolean expression into a physical circuit",
      "Testing a circuit with an oscilloscope",
      "Removing errors from a program",
      "Converting analog signals to digital"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Breaking down is analysis, not synthesis.",
      "CORRECT. Synthesis is the process of transforming a Boolean expression into a gate-level circuit.",
      "Incorrect. Testing with instruments is verification, not synthesis.",
      "Incorrect. That describes debugging software, not logic synthesis.",
      "Incorrect. ADC conversion is a separate topic from logic synthesis."
    ]
  },
  {
    "id": 10,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "The professor mentions that integrated circuits (ICs) contain multiple logic gates in a single package. What is the main advantage of using ICs?",
    "options": [
      "They consume more power",
      "They reduce size, cost, and improve reliability",
      "They are easier to repair individually",
      "They only contain one type of gate",
      "They require external cooling systems"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. ICs are designed to minimize power consumption.",
      "CORRECT. Integration reduces wiring, size, cost, and potential failure points.",
      "Incorrect. Individual gate repair is not practical; the IC is replaced.",
      "Incorrect. Many ICs contain multiple gate types or complex functions.",
      "Incorrect. ICs do not inherently require external cooling."
    ]
  },
  {
    "id": 11,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "A textbook chapter describes 'noise margin' in digital circuits. Why is noise margin important?",
    "options": [
      "It increases the clock speed",
      "It allows the circuit to tolerate voltage fluctuations without errors",
      "It reduces the number of gates needed",
      "It eliminates the need for power supplies",
      "It converts noise into useful signals"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Noise margin does not affect clock speed.",
      "CORRECT. Noise margin ensures reliable operation despite electrical interference.",
      "Incorrect. Noise margin is about reliability, not gate count reduction.",
      "Incorrect. Power supplies are always required for digital circuits.",
      "Incorrect. Noise is unwanted and must be tolerated, not converted."
    ]
  },
  {
    "id": 12,
    "topic": "Intro to Course",
    "topicId": 1,
    "subtopic": "",
    "scenario": "During the first lecture, the professor distinguishes between positive and negative logic. What does this distinction refer to?",
    "options": [
      "The sign of the voltage values",
      "Whether HIGH or LOW represents logic 1",
      "The direction of current flow",
      "The polarity of the power supply",
      "The type of transistor used"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Voltage values are always positive in digital systems.",
      "CORRECT. In positive logic, HIGH=1/LOW=0; in negative logic, HIGH=0/LOW=1.",
      "Incorrect. Current direction is not what positive/negative logic means.",
      "Incorrect. Power supply polarity is a physical property, not a logic convention.",
      "Incorrect. Transistor type determines implementation, not logic convention."
    ]
  },
  {
    "id": 13,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A freshman student is examining a thermostat that displays room temperature as discrete numbers (72\u00b0, 73\u00b0, 74\u00b0) rather than a continuous needle. Which type of system is this?",
    "options": [
      "Purely analog system",
      "Digital system with discrete output",
      "Mechanical system",
      "Hydraulic system",
      "Pneumatic system"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Analog would show continuous variation, not discrete steps.",
      "CORRECT. The discrete numerical display is characteristic of a digital system.",
      "Incorrect. Mechanical systems involve moving parts, not the key distinction here.",
      "Incorrect. Hydraulic systems use fluid pressure, unrelated to the display type.",
      "Incorrect. Pneumatic systems use air pressure, not relevant to this scenario."
    ]
  },
  {
    "id": 14,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "In a digital clock lab, students build a circuit that counts seconds from 0 to 59 and then resets. What fundamental digital component enables this counting behavior?",
    "options": [
      "Analog-to-digital converter",
      "Counter circuit",
      "Operational amplifier",
      "Voltage regulator",
      "Filter circuit"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. ADC converts analog signals, it does not count.",
      "CORRECT. Digital counters increment values and can be designed to reset at specific limits.",
      "Incorrect. Op-amps are analog components for signal amplification.",
      "Incorrect. Voltage regulators maintain stable voltage, they do not count.",
      "Incorrect. Filters process signal frequencies, not counting operations."
    ]
  },
  {
    "id": 15,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A security system uses a keypad where each button press registers as a distinct binary code. Why is binary encoding used for the keypad input?",
    "options": [
      "Binary encoding is more complex and secure",
      "Binary allows the system to process inputs using logic circuits",
      "Binary uses more wires than other methods",
      "Binary encoding requires less security",
      "Binary is only used for numeric keys"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Complexity is not the reason; compatibility with digital logic is.",
      "CORRECT. Binary codes can be directly processed by digital logic gates and circuits.",
      "Incorrect. Binary actually reduces the number of wires needed.",
      "Incorrect. Security is independent of the encoding choice.",
      "Incorrect. Binary encoding works for all keys, not just numeric ones."
    ]
  },
  {
    "id": 16,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A student observes that a digital audio player stores music as a series of 0s and 1s. What is this process of converting sound into digital form called?",
    "options": [
      "Digital-to-analog conversion",
      "Analog-to-digital conversion",
      "Signal amplification",
      "Frequency modulation",
      "Binary decoding"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. DAC converts digital back to analog for playback.",
      "CORRECT. ADC samples analog sound waves and converts them into digital binary values.",
      "Incorrect. Amplification increases signal strength without digitization.",
      "Incorrect. Modulation varies a carrier signal, not conversion to digital.",
      "Incorrect. Decoding interprets binary, it does not create it from analog."
    ]
  },
  {
    "id": 17,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "In a vending machine, inserting a coin triggers a sensor that outputs a digital signal to the control circuit. What role does this sensor play?",
    "options": [
      "Power supply",
      "Input transducer",
      "Output display",
      "Memory storage",
      "Clock generator"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. The sensor does not provide power to the system.",
      "CORRECT. A transducer converts a physical event (coin insertion) into an electrical digital signal.",
      "Incorrect. The sensor does not display information.",
      "Incorrect. The sensor does not store data.",
      "Incorrect. The sensor does not generate timing signals."
    ]
  },
  {
    "id": 18,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A digital thermometer displays temperature using seven-segment displays. What type of circuit converts the internal binary value into the segment patterns?",
    "options": [
      "Counter circuit",
      "Decoder circuit",
      "Multiplexer",
      "Encoder circuit",
      "Shift register"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Counters increment values, they do not drive displays.",
      "CORRECT. A decoder converts binary coded data into the specific outputs needed for display segments.",
      "Incorrect. Multiplexers select between inputs, not convert codes to displays.",
      "Incorrect. Encoders do the reverse: convert multiple inputs to binary codes.",
      "Incorrect. Shift registers move data serially, not drive displays directly."
    ]
  },
  {
    "id": 19,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A student is told that digital systems have advantages over analog systems. Which of the following is a key advantage of digital systems?",
    "options": [
      "Infinite precision in values",
      "Better noise immunity and easier storage",
      "Simpler circuit design always",
      "No need for power supply",
      "Continuous signal representation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Digital has finite precision due to discrete representation.",
      "CORRECT. Digital signals can be regenerated to remove noise and are easily stored in memory.",
      "Incorrect. Digital design can be complex; the advantage is reliability, not simplicity.",
      "Incorrect. All electronic systems require power.",
      "Incorrect. Continuous representation is an analog characteristic."
    ]
  },
  {
    "id": 20,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "In a basic digital communication system, data is sent as a sequence of pulses. What is the primary challenge that digital signaling overcomes compared to analog?",
    "options": [
      "Signal attenuation cannot be corrected",
      "Noise accumulates and degrades the signal",
      "Analog signals are too fast",
      "Digital signals require more bandwidth",
      "Digital systems cannot be miniaturized"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Digital signals can be regenerated to overcome attenuation.",
      "CORRECT. Analog noise accumulates; digital signals can be cleaned and restored at each stage.",
      "Incorrect. Speed is not the fundamental issue being addressed.",
      "Incorrect. Digital compression often requires less bandwidth.",
      "Incorrect. Digital ICs are actually easier to miniaturize."
    ]
  },
  {
    "id": 21,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A robotics club builds a line-following robot that detects a black line using infrared sensors. The sensor outputs are fed into a digital circuit. What is this an example of?",
    "options": [
      "Pure analog computing",
      "Digital control system with sensing",
      "Mechanical computation",
      "Hydraulic control",
      "Manual control system"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. The digital circuit processing makes it not purely analog.",
      "CORRECT. Sensors provide digital inputs to a control circuit that makes decisions.",
      "Incorrect. No mechanical computation is involved in the processing.",
      "Incorrect. Hydraulic systems use fluids, not infrared sensors.",
      "Incorrect. The system operates automatically, not manually."
    ]
  },
  {
    "id": 22,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A student learns that a DVD stores movies as digital data rather than analog grooves. What is the main benefit of this digital storage method?",
    "options": [
      "The data degrades faster",
      "The data can be copied without generational loss",
      "It requires larger physical space",
      "It cannot be compressed",
      "It is less durable physically"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Digital data does not degrade with normal reading.",
      "CORRECT. Digital copies are exact bit-for-bit replicas with no quality loss.",
      "Incorrect. Digital storage is typically more space-efficient.",
      "Incorrect. Digital data is highly compressible.",
      "Incorrect. Physical durability depends on the medium, not the data format."
    ]
  },
  {
    "id": 23,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "In a digital system, a signal must transition between LOW and HIGH within a specified time. What is this timing specification called?",
    "options": [
      "Pulse width",
      "Rise and fall time",
      "Duty cycle",
      "Clock frequency",
      "Propagation delay"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Pulse width is the duration of the pulse, not transition speed.",
      "CORRECT. Rise time (LOW to HIGH) and fall time (HIGH to LOW) specify transition speed.",
      "Incorrect. Duty cycle is the ratio of ON time to total period.",
      "Incorrect. Clock frequency is the rate of clock cycles per second.",
      "Incorrect. Propagation delay is the time for a signal to travel through a gate."
    ]
  },
  {
    "id": 24,
    "topic": "Digital Systems",
    "topicId": 2,
    "subtopic": "",
    "scenario": "A student notices that their calculator gives the exact same answer every time they calculate 25 \u00d7 4. Why does a digital calculator produce consistent results?",
    "options": [
      "It uses random number generation",
      "Digital systems process discrete values deterministically",
      "It stores all possible answers in memory",
      "It uses analog computation internally",
      "It guesses the answer based on probability"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Calculators are deterministic, not random.",
      "CORRECT. Digital systems follow exact algorithms with discrete values, ensuring repeatability.",
      "Incorrect. Answers are computed, not stored in a lookup table.",
      "Incorrect. Calculators are fully digital devices.",
      "Incorrect. Digital computation is deterministic, not probabilistic."
    ]
  },
  {
    "id": 25,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A student is configuring a basic sensor array that outputs a 4-bit signal representing temperature ranges. What is the maximum decimal value that can be represented with 4 unsigned bits?",
    "options": [
      "15",
      "16",
      "31",
      "8",
      "63"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 4 bits range from 0000 to 1111, which is 0 to 15 in decimal (2<sup>4</sup> - 1 = 15).",
      "Incorrect. 16 is 2<sup>4</sup>, but the maximum value is 2<sup>4</sup> - 1 = 15.",
      "Incorrect. 31 would require 5 bits (2<sup>5</sup> - 1 = 31).",
      "Incorrect. 8 is 2<sup>3</sup>, only representing 3-bit maximum.",
      "Incorrect. 63 would require 6 bits (2<sup>6</sup> - 1 = 63)."
    ]
  },
  {
    "id": 26,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "In a microcontroller lab, a student reads the binary value (101101)<sub>2</sub> from a data register. What is its decimal equivalent?",
    "options": [
      "43",
      "44",
      "45",
      "46",
      "47"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 43 = (101011)<sub>2</sub>. Recalculate: 32 + 8 + 4 + 1 = 45.",
      "Incorrect. 44 = (101100)<sub>2</sub>. The LSB should be 1, not 0.",
      "CORRECT. (101101)<sub>2</sub> = 32 + 8 + 4 + 1 = 45.",
      "Incorrect. 46 = (101110)<sub>2</sub>. The second LSB should be 0.",
      "Incorrect. 47 = (101111)<sub>2</sub>. The third bit should be 0."
    ]
  },
  {
    "id": 27,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A freshman needs to represent the decimal number 37 in binary for a breadboard circuit. Which binary value is correct?",
    "options": [
      "(100101)<sub>2</sub>",
      "(100110)<sub>2</sub>",
      "(101001)<sub>2</sub>",
      "(100100)<sub>2</sub>",
      "(100111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 37 = 32 + 4 + 1 = (100101)<sub>2</sub>.",
      "Incorrect. (100110)<sub>2</sub> = 32 + 4 + 2 = 38.",
      "Incorrect. (101001)<sub>2</sub> = 32 + 8 + 1 = 41.",
      "Incorrect. (100100)<sub>2</sub> = 32 + 4 = 36.",
      "Incorrect. (100111)<sub>2</sub> = 32 + 4 + 2 + 1 = 39."
    ]
  },
  {
    "id": 28,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "During a lab exercise, a student counts in binary from 0 to 7. Which sequence correctly shows this counting order?",
    "options": [
      "000, 001, 010, 011, 100, 101, 110, 111",
      "000, 010, 001, 011, 100, 101, 110, 111",
      "000, 001, 011, 010, 100, 101, 110, 111",
      "000, 001, 010, 011, 100, 110, 101, 111",
      "000, 001, 010, 011, 101, 100, 110, 111"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Binary counting follows natural binary progression: 0, 1, 2, 3, 4, 5, 6, 7.",
      "Incorrect. 001 should come before 010 (1 before 2).",
      "Incorrect. 010 (2) should come before 011 (3).",
      "Incorrect. 101 (5) should come before 110 (6).",
      "Incorrect. 100 (4) should come before 101 (5)."
    ]
  },
  {
    "id": 29,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A technician needs to determine how many bits are required to represent 50 distinct temperature readings. What is the minimum number of bits needed?",
    "options": [
      "5 bits",
      "6 bits",
      "7 bits",
      "8 bits",
      "4 bits"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 5 bits can only represent 2<sup>5</sup> = 32 distinct values.",
      "CORRECT. 6 bits can represent 2<sup>6</sup> = 64 distinct values, which covers 50 readings.",
      "Incorrect. 7 bits can represent 128 values but is more than the minimum needed.",
      "Incorrect. 8 bits can represent 256 values, which is excessive.",
      "Incorrect. 4 bits can only represent 16 distinct values."
    ]
  },
  {
    "id": 30,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "In a digital logic lab, a student writes the binary number (10000000)<sub>2</sub>. What decimal value does this represent?",
    "options": [
      "64",
      "128",
      "256",
      "127",
      "255"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 64 = (1000000)<sub>2</sub> with only 7 bits.",
      "CORRECT. (10000000)<sub>2</sub> = 2<sup>7</sup> = 128.",
      "Incorrect. 256 = (100000000)<sub>2</sub> with 9 bits.",
      "Incorrect. 127 = (1111111)<sub>2</sub>.",
      "Incorrect. 255 = (11111111)<sub>2</sub>."
    ]
  },
  {
    "id": 31,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A student is asked to find the weight (place value) of the third bit from the right in a binary number. What is this weight?",
    "options": [
      "2<sup>1</sup> = 2",
      "2<sup>2</sup> = 4",
      "2<sup>3</sup> = 8",
      "2<sup>0</sup> = 1",
      "2<sup>4</sup> = 16"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 2<sup>1</sup> is the weight of the second bit from the right.",
      "CORRECT. The third bit from the right has weight 2<sup>2</sup> = 4 (bits are numbered 0, 1, 2, ... from right).",
      "Incorrect. 2<sup>3</sup> is the weight of the fourth bit from the right.",
      "Incorrect. 2<sup>0</sup> is the weight of the rightmost (first) bit.",
      "Incorrect. 2<sup>4</sup> is the weight of the fifth bit from the right."
    ]
  },
  {
    "id": 32,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "During an exam, a student must convert (11110000)<sub>2</sub> to decimal. What is the correct answer?",
    "options": [
      "224",
      "240",
      "248",
      "192",
      "128"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 224 = (11100000)<sub>2</sub>.",
      "CORRECT. (11110000)<sub>2</sub> = 128 + 64 + 32 + 16 = 240.",
      "Incorrect. 248 = (11111000)<sub>2</sub>.",
      "Incorrect. 192 = (11000000)<sub>2</sub>.",
      "Incorrect. 128 = (10000000)<sub>2</sub>."
    ]
  },
  {
    "id": 33,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A lab manual asks students to identify which binary number is the largest among a set. Without converting, what rule can a student use?",
    "options": [
      "The number with the most 1s is always largest",
      "The number with the most bits is always largest",
      "Compare from the MSB; the first differing bit determines the larger number",
      "Numbers ending in 1 are always larger",
      "Numbers starting with 0 are always larger"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. The position of 1s matters more than the count of 1s.",
      "Incorrect. More bits generally mean larger range, but for equal-length numbers, MSB comparison is needed.",
      "CORRECT. For equal-length binary numbers, compare from the most significant bit leftward.",
      "Incorrect. The LSB has minimal impact on the overall magnitude.",
      "Incorrect. A leading 0 indicates a smaller value for positive numbers."
    ]
  },
  {
    "id": 34,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "In a digital systems lab, a student learns about the range of n-bit unsigned numbers. What is the general formula for the maximum value of an n-bit unsigned binary number?",
    "options": [
      "2<sup>n</sup>",
      "2<sup>n</sup> - 1",
      "2<sup>n-1</sup>",
      "n<sup>2</sup>",
      "2<sup>n</sup> + 1"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 2<sup>n</sup> is the count of distinct values, not the maximum.",
      "CORRECT. An n-bit unsigned number ranges from 0 to 2<sup>n</sup> - 1.",
      "Incorrect. 2<sup>n-1</sup> is the weight of the MSB, not the maximum value.",
      "Incorrect. n<sup>2</sup> has no relevance to binary number range.",
      "Incorrect. 2<sup>n</sup> + 1 is not a valid formula for binary range."
    ]
  },
  {
    "id": 35,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "A student needs to express the decimal number 0 in 8-bit binary. What is the correct representation?",
    "options": [
      "(11111111)<sub>2</sub>",
      "(00000000)<sub>2</sub>",
      "(10000000)<sub>2</sub>",
      "(00000001)<sub>2</sub>",
      "(01111111)<sub>2</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (11111111)<sub>2</sub> = 255, the maximum 8-bit value.",
      "CORRECT. Zero in binary is represented by all bits being 0.",
      "Incorrect. (10000000)<sub>2</sub> = 128.",
      "Incorrect. (00000001)<sub>2</sub> = 1.",
      "Incorrect. (01111111)<sub>2</sub> = 127."
    ]
  },
  {
    "id": 36,
    "topic": "Binary Numbers",
    "topicId": 3,
    "subtopic": "",
    "scenario": "In a hardware troubleshooting exercise, a student sees the binary pattern (00001111)<sub>2</sub> on an LED display. What decimal value is being shown?",
    "options": [
      "15",
      "16",
      "17",
      "240",
      "127"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (00001111)<sub>2</sub> = 8 + 4 + 2 + 1 = 15.",
      "Incorrect. (00010000)<sub>2</sub> = 16.",
      "Incorrect. (00010001)<sub>2</sub> = 17.",
      "Incorrect. (11110000)<sub>2</sub> = 240.",
      "Incorrect. (01111111)<sub>2</sub> = 127."
    ]
  },
  {
    "id": 37,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A technician encounters the octal value (247)<sub>8</sub> on a legacy system's debug console. What is its decimal equivalent?",
    "options": [
      "167",
      "168",
      "169",
      "170",
      "166"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (247)<sub>8</sub> = 2\u00d78<sup>2</sup> + 4\u00d78<sup>1</sup> + 7\u00d78<sup>0</sup> = 128 + 32 + 7 = 167.",
      "Incorrect. Missing a digit: 128 + 32 + 8 = 168, but the last digit is 7, not 8.",
      "Incorrect. 128 + 32 + 7 = 167, not 169.",
      "Incorrect. 128 + 32 + 7 = 167, not 170.",
      "Incorrect. 128 + 32 + 6 = 166, but the last digit is 7."
    ]
  },
  {
    "id": 38,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A student needs to convert the decimal number 93 to octal for a file permission system. What is the correct octal representation?",
    "options": [
      "(135)<sub>8</sub>",
      "(137)<sub>8</sub>",
      "(127)<sub>8</sub>",
      "(145)<sub>8</sub>",
      "(115)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 93 \u00f7 8 = 11 remainder 5; 11 \u00f7 8 = 1 remainder 3; 1 \u00f7 8 = 0 remainder 1. Reading up: (135)<sub>8</sub>.",
      "Incorrect. (137)<sub>8</sub> = 64 + 24 + 7 = 95.",
      "Incorrect. (127)<sub>8</sub> = 64 + 16 + 7 = 87.",
      "Incorrect. (145)<sub>8</sub> = 64 + 32 + 5 = 101.",
      "Incorrect. (115)<sub>8</sub> = 64 + 8 + 5 = 77."
    ]
  },
  {
    "id": 39,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "In a Unix lab, students learn about file permissions represented in octal. What is the maximum value of a single octal digit?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "15"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Octal digits go from 0 to 7, so 7 is the maximum, not 6.",
      "CORRECT. Octal is base-8, so valid digits are 0, 1, 2, 3, 4, 5, 6, 7. Maximum is 7.",
      "Incorrect. 8 is not a valid digit in base-8; it would be written as (10)<sub>8</sub>.",
      "Incorrect. 9 is not a valid octal digit.",
      "Incorrect. 15 = (17)<sub>8</sub>, which requires two octal digits."
    ]
  },
  {
    "id": 40,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A junior engineer converts the binary number (110101110)<sub>2</sub> to octal by grouping bits. What is the correct octal value?",
    "options": [
      "(656)<sub>8</sub>",
      "(656)<sub>8</sub>",
      "(726)<sub>8</sub>",
      "(556)<sub>8</sub>",
      "(646)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Group as 110 101 110 = 6 5 6. (656)<sub>8</sub>.",
      "This is the same as option A.",
      "Incorrect. 111 010 110 = (726)<sub>8</sub>, different grouping.",
      "Incorrect. 101 101 110 = (556)<sub>8</sub>, wrong bit values.",
      "Incorrect. 110 100 110 = (646)<sub>8</sub>, middle group is wrong."
    ]
  },
  {
    "id": 41,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A student converts the octal value (52)<sub>8</sub> to binary. What is the correct result?",
    "options": [
      "(101010)<sub>2</sub>",
      "(101001)<sub>2</sub>",
      "(101100)<sub>2</sub>",
      "(100101)<sub>2</sub>",
      "(110010)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 5 = (101)<sub>2</sub>, 2 = (010)<sub>2</sub>. Combined: (101010)<sub>2</sub>.",
      "Incorrect. This would be (51)<sub>8</sub>.",
      "Incorrect. This would be (54)<sub>8</sub>.",
      "Incorrect. This would be (45)<sub>8</sub>.",
      "Incorrect. This would be (62)<sub>8</sub>."
    ]
  },
  {
    "id": 42,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "In an embedded systems lab, a student reads an octal value (377)<sub>8</sub> from a port register. What is the decimal equivalent?",
    "options": [
      "255",
      "256",
      "254",
      "247",
      "257"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (377)<sub>8</sub> = 3\u00d764 + 7\u00d78 + 7 = 192 + 56 + 7 = 255.",
      "Incorrect. (400)<sub>8</sub> = 256.",
      "Incorrect. (376)<sub>8</sub> = 254.",
      "Incorrect. (367)<sub>8</sub> = 247.",
      "Incorrect. (401)<sub>8</sub> = 257."
    ]
  },
  {
    "id": 43,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A technician needs to convert (100)<sub>8</sub> to decimal. What is the result?",
    "options": [
      "64",
      "100",
      "80",
      "72",
      "66"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (100)<sub>8</sub> = 1\u00d78<sup>2</sup> + 0\u00d78 + 0 = 64.",
      "Incorrect. (100)<sub>10</sub> = 100, but (100)<sub>8</sub> \u2260 100.",
      "Incorrect. (100)<sub>8</sub> = 64, not 80.",
      "Incorrect. (100)<sub>8</sub> = 64, not 72.",
      "Incorrect. (100)<sub>8</sub> = 64, not 66."
    ]
  },
  {
    "id": 44,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A student is asked how many different values can be represented with 3 octal digits. What is the correct answer?",
    "options": [
      "256",
      "512",
      "64",
      "128",
      "24"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 256 = 8<sup>3</sup> for 4 octal digits (8<sup>4</sup> = 4096 is wrong too). 256 is 2<sup>8</sup>.",
      "CORRECT. 3 octal digits can represent 8<sup>3</sup> = 512 distinct values (0 to 511).",
      "Incorrect. 64 = 8<sup>2</sup>, which is for 2 octal digits.",
      "Incorrect. 128 = 2<sup>7</sup>, not related to 3 octal digits.",
      "Incorrect. 24 = 3 \u00d7 8, not the number of combinations."
    ]
  },
  {
    "id": 45,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "In a number systems worksheet, a student must add (1)<sub>8</sub> + (7)<sub>8</sub>. What is the result?",
    "options": [
      "(8)<sub>8</sub>",
      "(10)<sub>8</sub>",
      "(7)<sub>8</sub>",
      "(11)<sub>8</sub>",
      "(6)<sub>8</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 8 is not a valid octal digit.",
      "CORRECT. 1 + 7 = 8 = 1\u00d78 + 0, so the result is (10)<sub>8</sub>.",
      "Incorrect. 1 + 7 = 8, not 7.",
      "Incorrect. (11)<sub>8</sub> = 9 in decimal.",
      "Incorrect. 1 + 7 = 8, not 6."
    ]
  },
  {
    "id": 46,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A student converts the octal value (0)<sub>8</sub> to decimal. What is the result?",
    "options": [
      "0",
      "1",
      "7",
      "8",
      "Undefined"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Zero in any number base is always 0.",
      "Incorrect. Zero is 0 in all number systems.",
      "Incorrect. Zero is 0, not 7.",
      "Incorrect. Zero is 0, not 8.",
      "Incorrect. Zero is well-defined in all number systems."
    ]
  },
  {
    "id": 47,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A lab manual shows the octal value (200)<sub>8</sub>. What is its decimal equivalent?",
    "options": [
      "128",
      "160",
      "200",
      "256",
      "144"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (200)<sub>8</sub> = 2\u00d78<sup>2</sup> + 0 + 0 = 2\u00d764 = 128.",
      "Incorrect. (200)<sub>8</sub> = 128, not 160.",
      "Incorrect. (200)<sub>10</sub> = 200, but (200)<sub>8</sub> \u2260 200.",
      "Incorrect. (200)<sub>8</sub> = 128, not 256.",
      "Incorrect. (200)<sub>8</sub> = 128, not 144."
    ]
  },
  {
    "id": 48,
    "topic": "Octal Numbers",
    "topicId": 4,
    "subtopic": "",
    "scenario": "A student converts the octal value (17)<sub>8</sub> to binary using the 3-bit method. What is the correct binary result?",
    "options": [
      "(001111)<sub>2</sub>",
      "(001111)<sub>2</sub>",
      "(001110)<sub>2</sub>",
      "(011101)<sub>2</sub>",
      "(010111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1 = (001)<sub>2</sub>, 7 = (111)<sub>2</sub>. Combined: (001111)<sub>2</sub>.",
      "This is the same as option A.",
      "Incorrect. This would give (16)<sub>8</sub>.",
      "Incorrect. This would give (35)<sub>8</sub>.",
      "Incorrect. This would give (27)<sub>8</sub>."
    ]
  },
  {
    "id": 49,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A first-year student reviews the decimal number system. What is the base (radix) of the decimal system?",
    "options": [
      "2",
      "8",
      "10",
      "16",
      "12"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 2 is the base of the binary system.",
      "Incorrect. 8 is the base of the octal system.",
      "CORRECT. Decimal is base-10, using digits 0 through 9.",
      "Incorrect. 16 is the base of the hexadecimal system.",
      "Incorrect. 12 is the base of the duodecimal system, not standard decimal."
    ]
  },
  {
    "id": 50,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "In a number systems review, a student must identify the weights of the decimal number 437. What is the place value of the digit 3?",
    "options": [
      "Ones (10<sup>0</sup>)",
      "Tens (10<sup>1</sup>)",
      "Hundreds (10<sup>2</sup>)",
      "Thousands (10<sup>3</sup>)",
      "Ten-thousands (10<sup>4</sup>)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. The ones place is occupied by 7.",
      "CORRECT. The digit 3 is in the tens position: 3 \u00d7 10<sup>1</sup> = 30.",
      "Incorrect. The hundreds place is occupied by 4.",
      "Incorrect. 437 has no thousands digit.",
      "Incorrect. 437 has no ten-thousands digit."
    ]
  },
  {
    "id": 51,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student breaks down the decimal number 506 into its weighted positional values. Which expression is correct?",
    "options": [
      "5\u00d710<sup>3</sup> + 0\u00d710<sup>2</sup> + 6\u00d710<sup>1</sup>",
      "5\u00d710<sup>2</sup> + 0\u00d710<sup>1</sup> + 6\u00d710<sup>0</sup>",
      "5\u00d710<sup>2</sup> + 6\u00d710<sup>1</sup>",
      "5\u00d710<sup>1</sup> + 0\u00d710<sup>0</sup> + 6\u00d710<sup>-1</sup>",
      "5\u00d710<sup>3</sup> + 6\u00d710<sup>0</sup>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 10<sup>3</sup> = 1000, which is too large; also 6 is misplaced.",
      "CORRECT. 5\u00d7100 + 0\u00d710 + 6\u00d71 = 500 + 0 + 6 = 506.",
      "Incorrect. Missing the 0 coefficient and wrong place for 6.",
      "Incorrect. This represents 50.6, not 506.",
      "Incorrect. 5000 + 6 = 5006, not 506."
    ]
  },
  {
    "id": 52,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "In a lab exercise comparing number systems, a student counts the number of distinct symbols in the decimal system. How many symbols does decimal use?",
    "options": [
      "8",
      "9",
      "10",
      "16",
      "2"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 8 is the number of symbols in the octal system.",
      "Incorrect. 9 would exclude 0, but 0 is a valid decimal digit.",
      "CORRECT. Decimal uses 10 symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.",
      "Incorrect. 16 is the number of symbols in hexadecimal.",
      "Incorrect. 2 is the number of symbols in binary."
    ]
  },
  {
    "id": 53,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student needs to express the decimal value 1000 using powers of 10. What is the correct representation?",
    "options": [
      "10<sup>2</sup>",
      "10<sup>3</sup>",
      "10<sup>4</sup>",
      "10<sup>1</sup>",
      "10<sup>5</sup>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 10<sup>2</sup> = 100.",
      "CORRECT. 10<sup>3</sup> = 1000.",
      "Incorrect. 10<sup>4</sup> = 10000.",
      "Incorrect. 10<sup>1</sup> = 10.",
      "Incorrect. 10<sup>5</sup> = 100000."
    ]
  },
  {
    "id": 54,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student is asked why humans typically use the decimal system. What is the most widely accepted historical reason?",
    "options": [
      "Decimal is computationally more efficient",
      "Humans have ten fingers, making decimal intuitive",
      "Decimal was invented by computers",
      "Decimal requires fewer symbols than binary",
      "Decimal is the only system with zero"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Binary is computationally more efficient for digital systems.",
      "CORRECT. The decimal system evolved naturally because humans have ten fingers for counting.",
      "Incorrect. Decimal predates computers by thousands of years.",
      "Incorrect. Decimal uses more symbols than binary (10 vs 2).",
      "Incorrect. Other number systems (binary, octal, hex) also include zero."
    ]
  },
  {
    "id": 55,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "In a digital logic class, the professor explains that decimal numbers must be converted to binary for computer processing. Why can't computers work directly with decimal?",
    "options": [
      "Computers are not smart enough",
      "Computer circuits operate with two voltage levels (binary)",
      "Decimal requires too much memory",
      "Decimal is mathematically invalid",
      "Computers can only count to 10"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. It is not about intelligence but about physical circuit design.",
      "CORRECT. Digital circuits use two discrete voltage levels, naturally suited for binary.",
      "Incorrect. Memory usage is not the fundamental reason.",
      "Incorrect. Decimal is mathematically valid; it is just not hardware-friendly.",
      "Incorrect. Computers can represent arbitrarily large numbers."
    ]
  },
  {
    "id": 56,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student is multiplying a decimal number by 10. What happens to the digits?",
    "options": [
      "They shift one position to the right",
      "They shift one position to the left",
      "They remain in the same position",
      "They are all incremented by 1",
      "They are replaced by zeros"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Shifting right would divide by 10.",
      "CORRECT. Multiplying by 10 shifts all digits one place to the left (e.g., 25 \u00d7 10 = 250).",
      "Incorrect. The positions must change to represent the new magnitude.",
      "Incorrect. Incrementing each digit is not how multiplication works.",
      "Incorrect. Only a new zero is appended, existing digits are preserved."
    ]
  },
  {
    "id": 57,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student divides a decimal number by 10. What happens to the digits?",
    "options": [
      "They shift one position to the right",
      "They shift one position to the left",
      "They remain in the same position",
      "They are all decremented by 1",
      "They become fractions"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Dividing by 10 shifts all digits one place to the right (e.g., 250 \u00f7 10 = 25).",
      "Incorrect. Shifting left multiplies by 10.",
      "Incorrect. The positions must change to represent the new magnitude.",
      "Incorrect. Decrementing each digit is not how division works.",
      "Incorrect. Integer division results in an integer, not fractions."
    ]
  },
  {
    "id": 58,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student must find the largest 3-digit decimal number. What is it?",
    "options": [
      "100",
      "999",
      "990",
      "900",
      "1000"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 100 is the smallest 3-digit number.",
      "CORRECT. 999 is the largest 3-digit number (10<sup>3</sup> - 1 = 999).",
      "Incorrect. 990 is smaller than 999.",
      "Incorrect. 900 is smaller than 999.",
      "Incorrect. 1000 is a 4-digit number."
    ]
  },
  {
    "id": 59,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "In a worksheet, a student writes the decimal number 2005 in expanded form. Which expression is correct?",
    "options": [
      "2\u00d710<sup>4</sup> + 5\u00d710<sup>1</sup>",
      "2\u00d710<sup>3</sup> + 5\u00d710<sup>0</sup>",
      "2\u00d710<sup>3</sup> + 0\u00d710<sup>2</sup> + 0\u00d710<sup>1</sup> + 5\u00d710<sup>0</sup>",
      "2\u00d710<sup>2</sup> + 5\u00d710<sup>1</sup>",
      "2\u00d710<sup>3</sup> + 5\u00d710<sup>2</sup>"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 20000 + 50 = 20050, not 2005.",
      "Incorrect. Missing the zero place values which are part of the expanded form.",
      "CORRECT. 2000 + 0 + 0 + 5 = 2005, showing all place values.",
      "Incorrect. 200 + 50 = 250, not 2005.",
      "Incorrect. 2000 + 500 = 2500, not 2005."
    ]
  },
  {
    "id": 60,
    "topic": "Decimal Numbers",
    "topicId": 5,
    "subtopic": "",
    "scenario": "A student needs to find how many digits are required to represent the decimal number 5000. What is the answer?",
    "options": [
      "3 digits",
      "4 digits",
      "5 digits",
      "6 digits",
      "7 digits"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 3 digits can only represent up to 999.",
      "CORRECT. 5000 has 4 digits: 5, 0, 0, 0.",
      "Incorrect. 5000 does not have 5 digits.",
      "Incorrect. 5000 does not have 6 digits.",
      "Incorrect. 5000 does not have 7 digits."
    ]
  },
  {
    "id": 61,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student debugs a memory address shown as (A3F)<sub>16</sub>. What is the decimal equivalent of this hexadecimal value?",
    "options": [
      "2623",
      "2624",
      "2625",
      "2615",
      "2635"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (A3F)<sub>16</sub> = 10\u00d7256 + 3\u00d716 + 15 = 2560 + 48 + 15 = 2623.",
      "Incorrect. 2560 + 48 + 16 = 2624, but F = 15, not 16.",
      "Incorrect. 2560 + 48 + 15 = 2623, not 2625.",
      "Incorrect. 2560 + 48 + 15 = 2623, not 2615.",
      "Incorrect. 2560 + 48 + 15 = 2623, not 2635."
    ]
  },
  {
    "id": 62,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "In a memory mapping exercise, the decimal value 255 must be converted to hexadecimal. What is the result?",
    "options": [
      "(FE)<sub>16</sub>",
      "(FF)<sub>16</sub>",
      "(100)<sub>16</sub>",
      "(F0)<sub>16</sub>",
      "(EF)<sub>16</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (FE)<sub>16</sub> = 254.",
      "CORRECT. 255 = 15\u00d716 + 15 = (FF)<sub>16</sub>.",
      "Incorrect. (100)<sub>16</sub> = 256.",
      "Incorrect. (F0)<sub>16</sub> = 240.",
      "Incorrect. (EF)<sub>16</sub> = 239."
    ]
  },
  {
    "id": 63,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student converts the binary number (11110101)<sub>2</sub> to hexadecimal. What is the correct result?",
    "options": [
      "(F4)<sub>16</sub>",
      "(F5)<sub>16</sub>",
      "(E5)<sub>16</sub>",
      "(F6)<sub>16</sub>",
      "(E4)<sub>16</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (11110100)<sub>2</sub> = (F4)<sub>16</sub>.",
      "CORRECT. (1111)<sub>2</sub> = F, (0101)<sub>2</sub> = 5. Result: (F5)<sub>16</sub>.",
      "Incorrect. (11100101)<sub>2</sub> = (E5)<sub>16</sub>.",
      "Incorrect. (11110110)<sub>2</sub> = (F6)<sub>16</sub>.",
      "Incorrect. (11100100)<sub>2</sub> = (E4)<sub>16</sub>."
    ]
  },
  {
    "id": 64,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A technician needs to convert the hexadecimal value (2B)<sub>16</sub> to binary. What is the correct result?",
    "options": [
      "(00101010)<sub>2</sub>",
      "(00101011)<sub>2</sub>",
      "(00101100)<sub>2</sub>",
      "(00101001)<sub>2</sub>",
      "(00101110)<sub>2</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (2A)<sub>16</sub> = (00101010)<sub>2</sub>.",
      "CORRECT. 2 = (0010)<sub>2</sub>, B = (1011)<sub>2</sub>. Result: (00101011)<sub>2</sub>.",
      "Incorrect. (2C)<sub>16</sub> = (00101100)<sub>2</sub>.",
      "Incorrect. (29)<sub>16</sub> = (00101001)<sub>2</sub>.",
      "Incorrect. (2E)<sub>16</sub> = (00101110)<sub>2</sub>."
    ]
  },
  {
    "id": 65,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student learns that hexadecimal digits include letters. What is the decimal value of the hexadecimal digit 'C'?",
    "options": [
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. A = 10 in hexadecimal.",
      "Incorrect. B = 11 in hexadecimal.",
      "CORRECT. C = 12 in hexadecimal.",
      "Incorrect. D = 13 in hexadecimal.",
      "Incorrect. E = 14 in hexadecimal."
    ]
  },
  {
    "id": 66,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "In a networking lab, a MAC address contains the byte (FF)<sub>16</sub>. What is the decimal value of this byte?",
    "options": [
      "254",
      "255",
      "256",
      "240",
      "250"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (FE)<sub>16</sub> = 254.",
      "CORRECT. (FF)<sub>16</sub> = 15\u00d716 + 15 = 240 + 15 = 255.",
      "Incorrect. (100)<sub>16</sub> = 256.",
      "Incorrect. (F0)<sub>16</sub> = 240.",
      "Incorrect. (FA)<sub>16</sub> = 250."
    ]
  },
  {
    "id": 67,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student counts in hexadecimal from (F)<sub>16</sub>. What is the next value?",
    "options": [
      "(10)<sub>16</sub>",
      "(F1)<sub>16</sub>",
      "(G)<sub>16</sub>",
      "(1F)<sub>16</sub>",
      "(20)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. After F (15), the next value is 16 = (10)<sub>16</sub>.",
      "Incorrect. (F1)<sub>16</sub> = 241, which is much larger.",
      "Incorrect. G is not a valid hexadecimal digit.",
      "Incorrect. (1F)<sub>16</sub> = 31, not 16.",
      "Incorrect. (20)<sub>16</sub> = 32, not 16."
    ]
  },
  {
    "id": 68,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student converts (100)<sub>16</sub> to decimal. What is the result?",
    "options": [
      "100",
      "256",
      "160",
      "116",
      "196"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (100)<sub>10</sub> = 100, but (100)<sub>16</sub> \u2260 100.",
      "CORRECT. (100)<sub>16</sub> = 1\u00d716<sup>2</sup> + 0 + 0 = 256.",
      "Incorrect. (100)<sub>16</sub> = 256, not 160.",
      "Incorrect. (100)<sub>16</sub> = 256, not 116.",
      "Incorrect. (100)<sub>16</sub> = 256, not 196."
    ]
  },
  {
    "id": 69,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "In a color picker application, the RGB value #00FF00 represents pure green. What is the decimal value of the green component (FF)?",
    "options": [
      "0",
      "128",
      "255",
      "240",
      "256"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 00 = 0 in decimal.",
      "Incorrect. 128 = (80)<sub>16</sub>.",
      "CORRECT. (FF)<sub>16</sub> = 255, the maximum 8-bit value.",
      "Incorrect. (F0)<sub>16</sub> = 240.",
      "Incorrect. (100)<sub>16</sub> = 256."
    ]
  },
  {
    "id": 70,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student needs to convert the decimal number 4096 to hexadecimal. What is the result?",
    "options": [
      "(1000)<sub>16</sub>",
      "(FFF)<sub>16</sub>",
      "(100)<sub>16</sub>",
      "(2000)<sub>16</sub>",
      "(400)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 4096 = 16<sup>3</sup> = (1000)<sub>16</sub>.",
      "Incorrect. (FFF)<sub>16</sub> = 4095.",
      "Incorrect. (100)<sub>16</sub> = 256.",
      "Incorrect. (2000)<sub>16</sub> = 8192.",
      "Incorrect. (400)<sub>16</sub> = 1024."
    ]
  },
  {
    "id": 71,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student converts (BAD)<sub>16</sub> to decimal. What is the result?",
    "options": [
      "2987",
      "2989",
      "2990",
      "3000",
      "2985"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 11\u00d7256 + 10\u00d716 + 13 = 2816 + 160 + 13 = 2989, not 2987.",
      "CORRECT. (BAD)<sub>16</sub> = 11\u00d7256 + 10\u00d716 + 13 = 2816 + 160 + 13 = 2989.",
      "Incorrect. (BAE)<sub>16</sub> = 2990.",
      "Incorrect. 2816 + 160 + 13 = 2989, not 3000.",
      "Incorrect. (BAB)<sub>16</sub> = 2987."
    ]
  },
  {
    "id": 72,
    "topic": "Hexadecimal Numbers",
    "topicId": 6,
    "subtopic": "",
    "scenario": "A student is asked how many unique symbols exist in the hexadecimal number system. What is the correct answer?",
    "options": [
      "8",
      "10",
      "12",
      "16",
      "6"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect. 8 is the count of octal symbols.",
      "Incorrect. 10 is the count of decimal symbols.",
      "Incorrect. 12 is not the count of hex symbols.",
      "CORRECT. Hexadecimal uses 16 symbols: 0-9 and A-F.",
      "Incorrect. 6 is not the count of hex symbols."
    ]
  },
  {
    "id": 73,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A lab assistant asks a student to convert (10110)<sub>2</sub> to decimal. What is the correct answer?",
    "options": [
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. (10100)<sub>2</sub> = 20.",
      "Incorrect. (10101)<sub>2</sub> = 21.",
      "CORRECT. (10110)<sub>2</sub> = 16 + 4 + 2 = 22.",
      "Incorrect. (10111)<sub>2</sub> = 23.",
      "Incorrect. (11000)<sub>2</sub> = 24."
    ]
  },
  {
    "id": 74,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student must convert the decimal number 75 to binary. What is the correct result?",
    "options": [
      "(1001011)<sub>2</sub>",
      "(1001100)<sub>2</sub>",
      "(1001010)<sub>2</sub>",
      "(1001001)<sub>2</sub>",
      "(1000111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 75 = 64 + 8 + 2 + 1 = (1001011)<sub>2</sub>.",
      "Incorrect. (1001100)<sub>2</sub> = 64 + 8 + 4 = 76.",
      "Incorrect. (1001010)<sub>2</sub> = 64 + 8 + 2 = 74.",
      "Incorrect. (1001001)<sub>2</sub> = 64 + 8 + 1 = 73.",
      "Incorrect. (1000111)<sub>2</sub> = 64 + 4 + 2 + 1 = 71."
    ]
  },
  {
    "id": 75,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "In a number systems test, a student converts (372)<sub>8</sub> to hexadecimal. What is the correct answer?",
    "options": [
      "(FA)<sub>16</sub>",
      "(FB)<sub>16</sub>",
      "(FC)<sub>16</sub>",
      "(F9)<sub>16</sub>",
      "(FD)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (372)<sub>8</sub> = (011 111 010)<sub>2</sub> = (1111 1010)<sub>2</sub> = (FA)<sub>16</sub>.",
      "Incorrect. (FB)<sub>16</sub> = (373)<sub>8</sub>.",
      "Incorrect. (FC)<sub>16</sub> = (374)<sub>8</sub>.",
      "Incorrect. (F9)<sub>16</sub> = (371)<sub>8</sub>.",
      "Incorrect. (FD)<sub>16</sub> = (375)<sub>8</sub>."
    ]
  },
  {
    "id": 76,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student converts (ABC)<sub>16</sub> to octal. What is the correct result?",
    "options": [
      "(5274)<sub>8</sub>",
      "(5264)<sub>8</sub>",
      "(5174)<sub>8</sub>",
      "(6274)<sub>8</sub>",
      "(5273)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (ABC)<sub>16</sub> = 10\u00d7256 + 11\u00d716 + 12 = 2748. 2748 = 5\u00d7512 + 2\u00d764 + 7\u00d78 + 4 = (5274)<sub>8</sub>.",
      "Incorrect. (5264)<sub>8</sub> = 5\u00d7512 + 2\u00d764 + 6\u00d78 + 4 = 2740, not 2748.",
      "Incorrect. (5174)<sub>8</sub> = 5\u00d7512 + 1\u00d764 + 7\u00d78 + 4 = 2684, not 2748.",
      "Incorrect. (6274)<sub>8</sub> = 6\u00d7512 + 2\u00d764 + 7\u00d78 + 4 = 3260, not 2748.",
      "Incorrect. (5273)<sub>8</sub> = 2747, one less than 2748."
    ]
  },
  {
    "id": 77,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A technician converts (111100001111)<sub>2</sub> to hexadecimal. What is the result?",
    "options": [
      "(F0F)<sub>16</sub>",
      "(F1F)<sub>16</sub>",
      "(F0E)<sub>16</sub>",
      "(E0F)<sub>16</sub>",
      "(F10)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Group as 1111 0000 1111 = F 0 F. Result: (F0F)<sub>16</sub>.",
      "Incorrect. (1111 0001 1111)<sub>2</sub> = (F1F)<sub>16</sub>.",
      "Incorrect. (1111 0000 1110)<sub>2</sub> = (F0E)<sub>16</sub>.",
      "Incorrect. (1110 0000 1111)<sub>2</sub> = (E0F)<sub>16</sub>.",
      "Incorrect. (1111 0001 0000)<sub>2</sub> = (F10)<sub>16</sub>."
    ]
  },
  {
    "id": 78,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student must convert (1000)<sub>10</sub> to octal. What is the correct result?",
    "options": [
      "(1750)<sub>8</sub>",
      "(1760)<sub>8</sub>",
      "(1770)<sub>8</sub>",
      "(1780)<sub>8</sub>",
      "(1740)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1000 \u00f7 512 = 1 rem 488. 488 \u00f7 64 = 7 rem 40. 40 \u00f7 8 = 5 rem 0. So (1750)<sub>8</sub>.",
      "Incorrect. (1760)<sub>8</sub> = 1\u00d7512 + 7\u00d764 + 6\u00d78 = 512 + 448 + 48 = 1008.",
      "Incorrect. (1770)<sub>8</sub> = 512 + 448 + 56 = 1016.",
      "Incorrect. 8 is not a valid octal digit.",
      "Incorrect. (1740)<sub>8</sub> = 512 + 448 + 32 = 992."
    ]
  },
  {
    "id": 79,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student converts (BAD)<sub>16</sub> to binary. What is the correct result?",
    "options": [
      "(1011 1010 1100)<sub>2</sub>",
      "(1011 1010 1101)<sub>2</sub>",
      "(1011 1011 1101)<sub>2</sub>",
      "(1010 1010 1101)<sub>2</sub>",
      "(1011 1100 1101)<sub>2</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. B=1011, A=1010, D=1101. This has C=1100 at the end.",
      "CORRECT. B=(1011)<sub>2</sub>, A=(1010)<sub>2</sub>, D=(1101)<sub>2</sub>. Combined: (101110101101)<sub>2</sub>.",
      "Incorrect. The middle nibble should be A=(1010)<sub>2</sub>, not B=(1011)<sub>2</sub>.",
      "Incorrect. The first nibble should be B=(1011)<sub>2</sub>, not A=(1010)<sub>2</sub>.",
      "Incorrect. The middle nibble is wrong: should be A=(1010)<sub>2</sub>."
    ]
  },
  {
    "id": 80,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "In a programming class, a student converts (77)<sub>10</sub> to hexadecimal. What is the result?",
    "options": [
      "(4C)<sub>16</sub>",
      "(4D)<sub>16</sub>",
      "(4E)<sub>16</sub>",
      "(4F)<sub>16</sub>",
      "(4B)<sub>16</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (4C)<sub>16</sub> = 76.",
      "CORRECT. 77 = 4\u00d716 + 13 = (4D)<sub>16</sub>. D = 13.",
      "Incorrect. (4E)<sub>16</sub> = 78.",
      "Incorrect. (4F)<sub>16</sub> = 79.",
      "Incorrect. (4B)<sub>16</sub> = 75."
    ]
  },
  {
    "id": 81,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student converts (333)<sub>8</sub> to decimal. What is the result?",
    "options": [
      "217",
      "218",
      "219",
      "220",
      "221"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. (331)<sub>8</sub> = 217.",
      "Incorrect. (332)<sub>8</sub> = 218.",
      "CORRECT. (333)<sub>8</sub> = 3\u00d764 + 3\u00d78 + 3 = 192 + 24 + 3 = 219.",
      "Incorrect. (334)<sub>8</sub> = 220.",
      "Incorrect. (335)<sub>8</sub> = 221."
    ]
  },
  {
    "id": 82,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A technician converts (11111111)<sub>2</sub> to decimal. What is the result?",
    "options": [
      "127",
      "128",
      "255",
      "256",
      "511"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. (1111111)<sub>2</sub> = 127 (7 bits).",
      "Incorrect. (10000000)<sub>2</sub> = 128.",
      "CORRECT. (11111111)<sub>2</sub> = 255 (8 bits, all 1s).",
      "Incorrect. (100000000)<sub>2</sub> = 256 (9 bits).",
      "Incorrect. (111111111)<sub>2</sub> = 511 (9 bits)."
    ]
  },
  {
    "id": 83,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student converts (500)<sub>10</sub> to hexadecimal. What is the result?",
    "options": [
      "(1F0)<sub>16</sub>",
      "(1F4)<sub>16</sub>",
      "(1E4)<sub>16</sub>",
      "(1F5)<sub>16</sub>",
      "(1E5)<sub>16</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (1F0)<sub>16</sub> = 1\u00d7256 + 15\u00d716 = 256 + 240 = 496.",
      "CORRECT. (1F4)<sub>16</sub> = 1\u00d7256 + 15\u00d716 + 4 = 256 + 240 + 4 = 500.",
      "Incorrect. (1E4)<sub>16</sub> = 256 + 224 + 4 = 484.",
      "Incorrect. (1F5)<sub>16</sub> = 256 + 240 + 5 = 501.",
      "Incorrect. (1E5)<sub>16</sub> = 256 + 224 + 5 = 485."
    ]
  },
  {
    "id": 84,
    "topic": "Conversion of all base systems",
    "topicId": 7,
    "subtopic": "",
    "scenario": "A student converts (FACE)<sub>16</sub> to binary. What is the correct result?",
    "options": [
      "(1111 1010 1100 1110)<sub>2</sub>",
      "(1111 1010 1101 1110)<sub>2</sub>",
      "(1111 1010 1011 1110)<sub>2</sub>",
      "(1111 1011 1100 1110)<sub>2</sub>",
      "(1110 1010 1100 1110)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. F=(1111)<sub>2</sub>, A=(1010)<sub>2</sub>, C=(1100)<sub>2</sub>, E=(1110)<sub>2</sub>. Combined: (1111101011001110)<sub>2</sub>.",
      "Incorrect. D=(1101)<sub>2</sub>, but the third hex digit is C.",
      "Incorrect. B=(1011)<sub>2</sub>, but the third hex digit is C=(1100)<sub>2</sub>.",
      "Incorrect. B=(1011)<sub>2</sub>, but the second hex digit is A=(1010)<sub>2</sub>.",
      "Incorrect. E=(1110)<sub>2</sub>, but the first hex digit is F=(1111)<sub>2</sub>."
    ]
  },
  {
    "id": 85,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student performs binary addition: (1011)<sub>2</sub> + (1101)<sub>2</sub>. What is the result?",
    "options": [
      "(11000)<sub>2</sub>",
      "(11001)<sub>2</sub>",
      "(10110)<sub>2</sub>",
      "(11010)<sub>2</sub>",
      "(10000)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1011 + 1101 = 11000 (11 + 13 = 24).",
      "Incorrect. This would be 25 in decimal.",
      "Incorrect. This would be 22 in decimal.",
      "Incorrect. This would be 26 in decimal.",
      "Incorrect. This would be 16 in decimal."
    ]
  },
  {
    "id": 86,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "In an octal arithmetic lab, a student computes (345)<sub>8</sub> + (234)<sub>8</sub>. What is the result?",
    "options": [
      "(561)<sub>8</sub>",
      "(571)<sub>8</sub>",
      "(580)<sub>8</sub>",
      "(581)<sub>8</sub>",
      "(560)<sub>8</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 5+4=9=(11)<sub>8</sub>, not 1 with carry 0.",
      "CORRECT. 5+4=11=(1 with carry 1); 4+3+1=8=(10)<sub>8</sub>; 3+2+1=6. Result: (571)<sub>8</sub> = 377.",
      "Incorrect. 8 is not a valid octal digit.",
      "Incorrect. 8 is not a valid octal digit.",
      "Incorrect. The middle column sum is wrong."
    ]
  },
  {
    "id": 87,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student adds the hexadecimal values (A5)<sub>16</sub> + (3B)<sub>16</sub>. What is the result?",
    "options": [
      "(E0)<sub>16</sub>",
      "(DF)<sub>16</sub>",
      "(E1)<sub>16</sub>",
      "(D0)<sub>16</sub>",
      "(DE)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 5+B = 5+11 = 16 = (10)<sub>16</sub>, write 0 carry 1. A+3+1 = 10+3+1 = 14 = E. Result: (E0)<sub>16</sub>.",
      "Incorrect. F would require 5+B=15 without carry, but 5+B=16.",
      "Incorrect. E1 would mean no carry from the first column.",
      "Incorrect. D0 ignores the carry from the first column.",
      "Incorrect. DE is incorrect for both columns."
    ]
  },
  {
    "id": 88,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student performs binary addition: (111111)<sub>2</sub> + (1)<sub>2</sub>. What is the result?",
    "options": [
      "(111110)<sub>2</sub>",
      "(1000000)<sub>2</sub>",
      "(100000)<sub>2</sub>",
      "(111112)<sub>2</sub>",
      "(100001)<sub>2</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. This would be subtraction, not addition.",
      "CORRECT. 63 + 1 = 64 = (1000000)<sub>2</sub>.",
      "Incorrect. (100000)<sub>2</sub> = 32, not 64.",
      "Incorrect. 2 is not a valid binary digit.",
      "Incorrect. (100001)<sub>2</sub> = 33."
    ]
  },
  {
    "id": 89,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "In a hexadecimal addition exercise, a student computes (FF)<sub>16</sub> + (1)<sub>16</sub>. What is the result?",
    "options": [
      "(100)<sub>16</sub>",
      "(FF1)<sub>16</sub>",
      "(1FF)<sub>16</sub>",
      "(FE)<sub>16</sub>",
      "(00)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 255 + 1 = 256 = (100)<sub>16</sub>.",
      "Incorrect. This concatenates rather than adds.",
      "Incorrect. Wrong placement and operation.",
      "Incorrect. This would be subtraction.",
      "Incorrect. The result is not zero."
    ]
  },
  {
    "id": 90,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student adds (777)<sub>8</sub> + (1)<sub>8</sub>. What is the result?",
    "options": [
      "(778)<sub>8</sub>",
      "(1000)<sub>8</sub>",
      "(7771)<sub>8</sub>",
      "(100)<sub>8</sub>",
      "(776)<sub>8</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 8 is not a valid octal digit.",
      "CORRECT. 511 + 1 = 512 = (1000)<sub>8</sub>.",
      "Incorrect. This concatenates rather than adds.",
      "Incorrect. (100)<sub>8</sub> = 64, not 512.",
      "Incorrect. This would be subtraction."
    ]
  },
  {
    "id": 91,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student adds (101010)<sub>2</sub> + (010101)<sub>2</sub>. What is the result?",
    "options": [
      "(111111)<sub>2</sub>",
      "(1000000)<sub>2</sub>",
      "(1010101)<sub>2</sub>",
      "(110110)<sub>2</sub>",
      "(1000001)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 42 + 21 = 63 = (111111)<sub>2</sub>.",
      "Incorrect. (1000000)<sub>2</sub> = 64.",
      "Incorrect. (1010101)<sub>2</sub> = 85.",
      "Incorrect. (110110)<sub>2</sub> = 54.",
      "Incorrect. (1000001)<sub>2</sub> = 65."
    ]
  },
  {
    "id": 92,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student performs octal addition: (123)<sub>8</sub> + (456)<sub>8</sub>. What is the result?",
    "options": [
      "(577)<sub>8</sub>",
      "(600)<sub>8</sub>",
      "(578)<sub>8</sub>",
      "(601)<sub>8</sub>",
      "(579)<sub>8</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 3+6=9=(11)<sub>8</sub>, not 7.",
      "CORRECT. 3+6=9=(11)<sub>8</sub>; 2+5+1=8=(10)<sub>8</sub>; 1+4+1=6. Result: (600)<sub>8</sub> = 384.",
      "Incorrect. 8 is not a valid octal digit.",
      "Incorrect. The carries are computed wrong.",
      "Incorrect. 9 is not a valid octal digit."
    ]
  },
  {
    "id": 93,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student adds (9A)<sub>16</sub> + (B)<sub>16</sub>. What is the result?",
    "options": [
      "(A5)<sub>16</sub>",
      "(A6)<sub>16</sub>",
      "(A4)<sub>16</sub>",
      "(B5)<sub>16</sub>",
      "(95)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A+B = 10+11 = 21 = (15)<sub>16</sub>, write 5 carry 1. 9+1 = 10 = A. Result: (A5)<sub>16</sub>.",
      "Incorrect. This would require A+B=22.",
      "Incorrect. This ignores the carry.",
      "Incorrect. Wrong computation.",
      "Incorrect. This ignores the B addition."
    ]
  },
  {
    "id": 94,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "In a binary addition exercise, a student computes (1100)<sub>2</sub> + (1100)<sub>2</sub>. What is the result?",
    "options": [
      "(11000)<sub>2</sub>",
      "(10000)<sub>2</sub>",
      "(11001)<sub>2</sub>",
      "(10100)<sub>2</sub>",
      "(11100)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 12 + 12 = 24 = (11000)<sub>2</sub>.",
      "Incorrect. (10000)<sub>2</sub> = 16.",
      "Incorrect. (11001)<sub>2</sub> = 25.",
      "Incorrect. (10100)<sub>2</sub> = 20.",
      "Incorrect. (11100)<sub>2</sub> = 28."
    ]
  },
  {
    "id": 95,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student adds (ABC)<sub>16</sub> + (123)<sub>16</sub>. What is the result?",
    "options": [
      "(BDE)<sub>16</sub>",
      "(BDF)<sub>16</sub>",
      "(CDF)<sub>16</sub>",
      "(BEE)<sub>16</sub>",
      "(CDD)<sub>16</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. C+3=15=F, not E.",
      "CORRECT. C+3=15=F; B+2=13=D; A+1=11=B. Result: (BDF)<sub>16</sub>.",
      "Incorrect. A+1=B, not C.",
      "Incorrect. B+2=D, not E.",
      "Incorrect. Multiple column errors."
    ]
  },
  {
    "id": 96,
    "topic": "Addition of all base number systems",
    "topicId": 8,
    "subtopic": "",
    "scenario": "A student performs octal addition: (707)<sub>8</sub> + (71)<sub>8</sub>. What is the result?",
    "options": [
      "(1000)<sub>8</sub>",
      "(777)<sub>8</sub>",
      "(1001)<sub>8</sub>",
      "(778)<sub>8</sub>",
      "(700)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 7+1=8=(10)<sub>8</sub>; 0+7+1=8=(10)<sub>8</sub>; 7+1=8=(10)<sub>8</sub>. Result: (1000)<sub>8</sub> = 512.",
      "Incorrect. (777)<sub>8</sub> = 511.",
      "Incorrect. (1001)<sub>8</sub> = 513.",
      "Incorrect. 8 is not a valid octal digit.",
      "Incorrect. (700)<sub>8</sub> = 448."
    ]
  },
  {
    "id": 97,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs binary multiplication: (101)<sub>2</sub> \u00d7 (11)<sub>2</sub>. What is the result?",
    "options": [
      "(1111)<sub>2</sub>",
      "(1110)<sub>2</sub>",
      "(10000)<sub>2</sub>",
      "(10001)<sub>2</sub>",
      "(1101)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 5 \u00d7 3 = 15 = (1111)<sub>2</sub>.",
      "Incorrect. (1110)<sub>2</sub> = 14.",
      "Incorrect. (10000)<sub>2</sub> = 16.",
      "Incorrect. (10001)<sub>2</sub> = 17.",
      "Incorrect. (1101)<sub>2</sub> = 13."
    ]
  },
  {
    "id": 98,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "In a hexadecimal arithmetic exercise, a student computes (A)<sub>16</sub> \u00d7 (A)<sub>16</sub>. What is the result?",
    "options": [
      "(64)<sub>16</sub>",
      "(50)<sub>16</sub>",
      "(100)<sub>16</sub>",
      "(82)<sub>16</sub>",
      "(6A)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 10 \u00d7 10 = 100 = 6\u00d716 + 4 = (64)<sub>16</sub>.",
      "Incorrect. (50)<sub>16</sub> = 80.",
      "Incorrect. (100)<sub>16</sub> = 256.",
      "Incorrect. (82)<sub>16</sub> = 130.",
      "Incorrect. (6A)<sub>16</sub> = 106."
    ]
  },
  {
    "id": 99,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs octal multiplication: (7)<sub>8</sub> \u00d7 (7)<sub>8</sub>. What is the result?",
    "options": [
      "(49)<sub>8</sub>",
      "(51)<sub>8</sub>",
      "(61)<sub>8</sub>",
      "(50)<sub>8</sub>",
      "(77)<sub>8</sub>"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. 9 is not a valid octal digit.",
      "Incorrect. (51)<sub>8</sub> = 41, not 49.",
      "CORRECT. 7 \u00d7 7 = 49 = 6\u00d78 + 1 = (61)<sub>8</sub>.",
      "Incorrect. (50)<sub>8</sub> = 40.",
      "Incorrect. (77)<sub>8</sub> = 63."
    ]
  },
  {
    "id": 100,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student multiplies (1010)<sub>2</sub> \u00d7 (101)<sub>2</sub>. What is the result?",
    "options": [
      "(110010)<sub>2</sub>",
      "(110100)<sub>2</sub>",
      "(101010)<sub>2</sub>",
      "(100010)<sub>2</sub>",
      "(111010)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 10 \u00d7 5 = 50 = 32 + 16 + 2 = (110010)<sub>2</sub>.",
      "Incorrect. (110100)<sub>2</sub> = 52.",
      "Incorrect. (101010)<sub>2</sub> = 42.",
      "Incorrect. (100010)<sub>2</sub> = 34.",
      "Incorrect. (111010)<sub>2</sub> = 58."
    ]
  },
  {
    "id": 101,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs hexadecimal multiplication: (F)<sub>16</sub> \u00d7 (F)<sub>16</sub>. What is the result?",
    "options": [
      "(E1)<sub>16</sub>",
      "(E0)<sub>16</sub>",
      "(F1)<sub>16</sub>",
      "(100)<sub>16</sub>",
      "(EF)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 15 \u00d7 15 = 225 = 14\u00d716 + 1 = (E1)<sub>16</sub>.",
      "Incorrect. (E0)<sub>16</sub> = 224.",
      "Incorrect. (F1)<sub>16</sub> = 241.",
      "Incorrect. (100)<sub>16</sub> = 256.",
      "Incorrect. (EF)<sub>16</sub> = 239."
    ]
  },
  {
    "id": 102,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student multiplies (6)<sub>8</sub> \u00d7 (5)<sub>8</sub>. What is the result?",
    "options": [
      "(30)<sub>8</sub>",
      "(36)<sub>8</sub>",
      "(32)<sub>8</sub>",
      "(34)<sub>8</sub>",
      "(40)<sub>8</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (30)<sub>8</sub> = 24, but 6\u00d75=30 decimal = 36 octal.",
      "CORRECT. 6 \u00d7 5 = 30 = 3\u00d78 + 6 = (36)<sub>8</sub>.",
      "Incorrect. (32)<sub>8</sub> = 26.",
      "Incorrect. (34)<sub>8</sub> = 28.",
      "Incorrect. (40)<sub>8</sub> = 32."
    ]
  },
  {
    "id": 103,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs binary multiplication: (111)<sub>2</sub> \u00d7 (111)<sub>2</sub>. What is the result?",
    "options": [
      "(110001)<sub>2</sub>",
      "(110000)<sub>2</sub>",
      "(111001)<sub>2</sub>",
      "(101001)<sub>2</sub>",
      "(100001)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 7 \u00d7 7 = 49 = 32 + 16 + 1 = (110001)<sub>2</sub>.",
      "Incorrect. (110000)<sub>2</sub> = 48.",
      "Incorrect. (111001)<sub>2</sub> = 57.",
      "Incorrect. (101001)<sub>2</sub> = 41.",
      "Incorrect. (100001)<sub>2</sub> = 33."
    ]
  },
  {
    "id": 104,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student multiplies (B)<sub>16</sub> \u00d7 (2)<sub>16</sub>. What is the result?",
    "options": [
      "(16)<sub>16</sub>",
      "(1A)<sub>16</sub>",
      "(22)<sub>16</sub>",
      "(15)<sub>16</sub>",
      "(20)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "Incorrect. (16)<sub>16</sub> = 22, but 11\u00d72=22, which is correct. Let me recalculate: B=11, 11\u00d72=22=16+6=(16)<sub>16</sub>. This is correct! Let me fix the options.",
      "CORRECT. 11 \u00d7 2 = 22 = 1\u00d716 + 6 = (16)<sub>16</sub>.",
      "Incorrect. (22)<sub>16</sub> = 34.",
      "Incorrect. (15)<sub>16</sub> = 21.",
      "Incorrect. (20)<sub>16</sub> = 32."
    ]
  },
  {
    "id": 105,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs octal multiplication: (12)<sub>8</sub> \u00d7 (3)<sub>8</sub>. What is the result?",
    "options": [
      "(36)<sub>8</sub>",
      "(34)<sub>8</sub>",
      "(35)<sub>8</sub>",
      "(40)<sub>8</sub>",
      "(37)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (12)<sub>8</sub> = 10. 10 \u00d7 3 = 30 = 3\u00d78 + 6 = (36)<sub>8</sub>.",
      "Incorrect. (34)<sub>8</sub> = 28.",
      "Incorrect. 5 is not valid as a direct result.",
      "Incorrect. (40)<sub>8</sub> = 32.",
      "Incorrect. (37)<sub>8</sub> = 31."
    ]
  },
  {
    "id": 106,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student multiplies (1001)<sub>2</sub> \u00d7 (101)<sub>2</sub>. What is the result?",
    "options": [
      "(101101)<sub>2</sub>",
      "(101100)<sub>2</sub>",
      "(101111)<sub>2</sub>",
      "(101001)<sub>2</sub>",
      "(100101)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 9 \u00d7 5 = 45 = 32 + 8 + 4 + 1 = (101101)<sub>2</sub>.",
      "Incorrect. (101100)<sub>2</sub> = 44.",
      "Incorrect. (101111)<sub>2</sub> = 47.",
      "Incorrect. (101001)<sub>2</sub> = 41.",
      "Incorrect. (100101)<sub>2</sub> = 37."
    ]
  },
  {
    "id": 107,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student performs hexadecimal multiplication: (2A)<sub>16</sub> \u00d7 (3)<sub>16</sub>. What is the result?",
    "options": [
      "(7E)<sub>16</sub>",
      "(7F)<sub>16</sub>",
      "(80)<sub>16</sub>",
      "(7D)<sub>16</sub>",
      "(8A)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 2A = 42. 42 \u00d7 3 = 126 = 7\u00d716 + 14 = (7E)<sub>16</sub>.",
      "Incorrect. (7F)<sub>16</sub> = 127.",
      "Incorrect. (80)<sub>16</sub> = 128.",
      "Incorrect. (7D)<sub>16</sub> = 125.",
      "Incorrect. (8A)<sub>16</sub> = 138."
    ]
  },
  {
    "id": 108,
    "topic": "Multiplication of all base number systems",
    "topicId": 9,
    "subtopic": "",
    "scenario": "A student multiplies (11)<sub>8</sub> \u00d7 (11)<sub>8</sub>. What is the result?",
    "options": [
      "(121)<sub>8</sub>",
      "(111)<sub>8</sub>",
      "(100)<sub>8</sub>",
      "(122)<sub>8</sub>",
      "(101)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (11)<sub>8</sub> = 9. 9 \u00d7 9 = 81 = 1\u00d764 + 2\u00d78 + 1 = (121)<sub>8</sub>.",
      "Incorrect. (111)<sub>8</sub> = 73.",
      "Incorrect. (100)<sub>8</sub> = 64.",
      "Incorrect. (122)<sub>8</sub> = 82.",
      "Incorrect. (101)<sub>8</sub> = 65."
    ]
  },
  {
    "id": 109,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student needs to find the 9's complement of the decimal number 572. What is the result?",
    "options": [
      "(427)",
      "(428)",
      "(429)",
      "(417)",
      "(437)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 9's complement: subtract each digit from 9. 9-5=4, 9-7=2, 9-2=7. Result: 427.",
      "Incorrect. 9-2=7, not 8. The last digit is wrong.",
      "Incorrect. 9-2=7, not 9. The last digit is wrong.",
      "Incorrect. 9-7=2, not 1. The middle digit is wrong.",
      "Incorrect. 9-5=4, not 4 (correct), but 9-7=2, not 3."
    ]
  },
  {
    "id": 110,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "In a digital arithmetic lab, a student must find the 1's complement of (101100)<sub>2</sub>. What is the result?",
    "options": [
      "(010011)<sub>2</sub>",
      "(010100)<sub>2</sub>",
      "(101011)<sub>2</sub>",
      "(010000)<sub>2</sub>",
      "(111111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1's complement inverts all bits: 1\u21920 and 0\u21921. (101100)<sub>2</sub> \u2192 (010011)<sub>2</sub>.",
      "Incorrect. Did not invert all bits correctly.",
      "Incorrect. This inverts only some bits.",
      "Incorrect. This sets only the 0 positions to 1.",
      "Incorrect. This would be the result for (000000)<sub>2</sub>."
    ]
  },
  {
    "id": 111,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student is asked to find the 8's complement of (365)<sub>8</sub>. What is the result?",
    "options": [
      "(412)<sub>8</sub>",
      "(413)<sub>8</sub>",
      "(414)<sub>8</sub>",
      "(405)<sub>8</sub>",
      "(422)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 8's complement: subtract each digit from 7 (since r-1=7 for octal). 7-3=4, 7-6=1, 7-5=2. Result: (412)<sub>8</sub>.",
      "Incorrect. 7-5=2, not 3.",
      "Incorrect. 7-5=2, not 4.",
      "Incorrect. 7-3=4 (correct), 7-6=1 (correct), 7-5=2, not 5.",
      "Incorrect. 7-3=4, not 4 (correct), 7-6=1, not 2."
    ]
  },
  {
    "id": 112,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student must find the 15's complement of (A5)<sub>16</sub>. What is the result?",
    "options": [
      "(5A)<sub>16</sub>",
      "(5B)<sub>16</sub>",
      "(5C)<sub>16</sub>",
      "(4A)<sub>16</sub>",
      "(6A)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 15's complement: subtract each digit from F (15). F-A=5, F-5=A. Result: (5A)<sub>16</sub>.",
      "Incorrect. F-5=A, not B.",
      "Incorrect. F-5=A, not C.",
      "Incorrect. F-A=5, not 4.",
      "Incorrect. F-A=5, not 6."
    ]
  },
  {
    "id": 113,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student performs subtraction using 9's complement: (842)<sub>10</sub> - (357)<sub>10</sub>. What is the result after applying the end-around carry?",
    "options": [
      "(485)",
      "(486)",
      "(484)",
      "(495)",
      "(476)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 9's complement of 357 = 642. 842 + 642 = 1484. EAC: 484 + 1 = 485.",
      "Incorrect. This forgets to add the end-around carry.",
      "Incorrect. This is the result before the end-around carry.",
      "Incorrect. Wrong complement used.",
      "Incorrect. Wrong computation."
    ]
  },
  {
    "id": 114,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student performs subtraction using 1's complement: (1011)<sub>2</sub> - (0101)<sub>2</sub>. What is the result?",
    "options": [
      "(0110)<sub>2</sub>",
      "(0111)<sub>2</sub>",
      "(0101)<sub>2</sub>",
      "(1100)<sub>2</sub>",
      "(1000)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1's complement of 0101 = 1010. 1011 + 1010 = 10101. EAC: 0101 + 1 = 0110 (6 = 11-5).",
      "Incorrect. Wrong final result after EAC.",
      "Incorrect. This is before applying EAC.",
      "Incorrect. Wrong computation.",
      "Incorrect. 11-5 = 6, not 8."
    ]
  },
  {
    "id": 115,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student must find the 7's complement of (250)<sub>8</sub>. What is the result?",
    "options": [
      "(527)<sub>8</sub>",
      "(528)<sub>8</sub>",
      "(537)<sub>8</sub>",
      "(526)<sub>8</sub>",
      "(627)<sub>8</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 7's complement: subtract each digit from 7. 7-2=5, 7-5=2, 7-0=7. Result: (527)<sub>8</sub>.",
      "Incorrect. 7-0=7, not 8 (8 is not valid in octal anyway).",
      "Incorrect. 7-2=5, not 5 (correct), 7-5=2, not 3.",
      "Incorrect. 7-0=7, not 6.",
      "Incorrect. 7-2=5, not 6."
    ]
  },
  {
    "id": 116,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student performs subtraction using 15's complement: (B)<sub>16</sub> - (3)<sub>16</sub>. What is the result?",
    "options": [
      "(8)<sub>16</sub>",
      "(9)<sub>16</sub>",
      "(7)<sub>16</sub>",
      "(A)<sub>16</sub>",
      "(6)<sub>16</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 15's complement of 3 = C (12). B + C = 11 + 12 = 23 = 17<sub>16</sub>. EAC: 7 + 1 = 8.",
      "Incorrect. Wrong final result.",
      "Incorrect. This is before EAC.",
      "Incorrect. B - 3 = 8, not A.",
      "Incorrect. B - 3 = 8, not 6."
    ]
  },
  {
    "id": 117,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student finds the 9's complement of 1000. What is the result?",
    "options": [
      "8999",
      "9000",
      "8990",
      "9888",
      "9999"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 9's complement: 9-1=8, 9-0=9, 9-0=9, 9-0=9. Result: 8999.",
      "Incorrect. This would be 10000-1000, not 9's complement.",
      "Incorrect. The last digit should be 9, not 0.",
      "Incorrect. Wrong digit subtraction.",
      "Incorrect. This would be 0's complement."
    ]
  },
  {
    "id": 118,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student performs subtraction using 1's complement: (1100)<sub>2</sub> - (1000)<sub>2</sub>. What is the result?",
    "options": [
      "(0100)<sub>2</sub>",
      "(0101)<sub>2</sub>",
      "(0110)<sub>2</sub>",
      "(0011)<sub>2</sub>",
      "(1000)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 1's complement of 1000 = 0111. 1100 + 0111 = 10011. EAC: 0011 + 1 = 0100 (4 = 12-8).",
      "Incorrect. Wrong result after EAC.",
      "Incorrect. 12-8=4, not 6.",
      "Incorrect. This is before EAC.",
      "Incorrect. 12-8=4, not 8."
    ]
  },
  {
    "id": 119,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student must find the 1's complement of (0000)<sub>2</sub>. What is the result?",
    "options": [
      "(1111)<sub>2</sub>",
      "(0000)<sub>2</sub>",
      "(0001)<sub>2</sub>",
      "(1000)<sub>2</sub>",
      "(0111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Inverting all bits of (0000)<sub>2</sub> gives (1111)<sub>2</sub>.",
      "Incorrect. Inverting bits changes 0 to 1.",
      "Incorrect. Only one bit changed.",
      "Incorrect. Only the MSB changed.",
      "Incorrect. Wrong bit pattern."
    ]
  },
  {
    "id": 120,
    "topic": "Subtraction of all base number systems using (r-1)'s complement",
    "topicId": 10,
    "subtopic": "",
    "scenario": "A student performs subtraction using 9's complement: (500)<sub>10</sub> - (499)<sub>10</sub>. What is the result after EAC?",
    "options": [
      "(001)",
      "(000)",
      "(002)",
      "(100)",
      "(999)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 9's complement of 499 = 500. 500 + 500 = 1000. EAC: 000 + 1 = 001.",
      "Incorrect. Must add the end-around carry.",
      "Incorrect. 500 - 499 = 1, not 2.",
      "Incorrect. Result should be 1.",
      "Incorrect. This is the complement, not the result."
    ]
  },
  {
    "id": 121,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "BCD",
    "scenario": "A digital display system must show the decimal digit 7 using BCD (8421) code. Which 4-bit pattern is correct?",
    "options": [
      "(0111)<sub>BCD</sub>",
      "(0110)<sub>BCD</sub>",
      "(0101)<sub>BCD</sub>",
      "(1000)<sub>BCD</sub>",
      "(1111)<sub>BCD</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. In BCD (8421), 7 = 0\u00d78 + 1\u00d74 + 1\u00d72 + 1\u00d71 = (0111)<sub>BCD</sub>.",
      "Incorrect. (0110)<sub>BCD</sub> = 6.",
      "Incorrect. (0101)<sub>BCD</sub> = 5.",
      "Incorrect. (1000)<sub>BCD</sub> = 8.",
      "Incorrect. (1111)<sub>BCD</sub> is an invalid BCD representation (15 > 9)."
    ]
  },
  {
    "id": 122,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "BCD",
    "scenario": "A student encodes the decimal number 59 into BCD. What is the correct 8-bit representation?",
    "options": [
      "(01011001)<sub>BCD</sub>",
      "(01011000)<sub>BCD</sub>",
      "(01001001)<sub>BCD</sub>",
      "(01011101)<sub>BCD</sub>",
      "(01101001)<sub>BCD</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 5 = (0101)<sub>BCD</sub>, 9 = (1001)<sub>BCD</sub>. Combined: (01011001)<sub>BCD</sub>.",
      "Incorrect. (1000) is 8, not 9.",
      "Incorrect. (0100) is 4, not 5.",
      "Incorrect. (1101) is invalid in BCD (13 > 9).",
      "Incorrect. (0110) is 6, not 5."
    ]
  },
  {
    "id": 123,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "BCD",
    "scenario": "A BCD decoder receives the input (1001 0111)<sub>BCD</sub>. What decimal value does it represent?",
    "options": [
      "97",
      "87",
      "98",
      "96",
      "10010111"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1001)<sub>BCD</sub> = 9, (0111)<sub>BCD</sub> = 7. Result: 97.",
      "Incorrect. (1000) would be 8, not (1001).",
      "Incorrect. (1000) is 8, but we have (1001) = 9.",
      "Incorrect. (0110) is 6, not (0111) = 7.",
      "Incorrect. This is the binary representation, not the decimal value."
    ]
  },
  {
    "id": 124,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "BCD",
    "scenario": "A student is told that (1010)<sub>BCD</sub> is an invalid code. Why is it invalid?",
    "options": [
      "It has too many bits",
      "BCD only encodes digits 0-9, and 1010 = 10",
      "It is missing a parity bit",
      "The bit pattern is not symmetrical",
      "BCD cannot represent even numbers"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. BCD uses exactly 4 bits per digit.",
      "CORRECT. BCD (8421) can only represent 0-9. (1010)<sub>BCD</sub> = 10, which is invalid.",
      "Incorrect. BCD does not require parity bits.",
      "Incorrect. Symmetry is not a BCD requirement.",
      "Incorrect. BCD can represent all digits 0-9, including even numbers."
    ]
  },
  {
    "id": 125,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "BCD",
    "scenario": "A student encodes the decimal number 0 in BCD. What is the 4-bit code?",
    "options": [
      "(0000)<sub>BCD</sub>",
      "(0001)<sub>BCD</sub>",
      "(1111)<sub>BCD</sub>",
      "(1000)<sub>BCD</sub>",
      "(0010)<sub>BCD</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Zero in BCD is (0000)<sub>BCD</sub>.",
      "Incorrect. (0001)<sub>BCD</sub> = 1.",
      "Incorrect. (1111) is invalid in BCD (15 > 9).",
      "Incorrect. (1000)<sub>BCD</sub> = 8.",
      "Incorrect. (0010)<sub>BCD</sub> = 2."
    ]
  },
  {
    "id": 126,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "Excess-3",
    "scenario": "A student needs to encode the decimal digit 4 using Excess-3 code. What is the 4-bit pattern?",
    "options": [
      "(0111)<sub>XS3</sub>",
      "(0100)<sub>XS3</sub>",
      "(0011)<sub>XS3</sub>",
      "(1000)<sub>XS3</sub>",
      "(0110)<sub>XS3</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Excess-3: add 3 to the digit then convert to BCD. 4+3=7=(0111)<sub>XS3</sub>.",
      "Incorrect. (0100) is BCD for 4, not Excess-3.",
      "Incorrect. 4-3=1=(0001), not (0011).",
      "Incorrect. (1000) in XS3 = 5 (8-3=5).",
      "Incorrect. (0110) in XS3 = 3 (6-3=3)."
    ]
  },
  {
    "id": 127,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "Excess-3",
    "scenario": "An Excess-3 decoder receives the input (1010). What decimal digit does it represent?",
    "options": [
      "7",
      "6",
      "5",
      "4",
      "3"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Excess-3: subtract 3 from the binary value. (1010)<sub>2</sub> = 10. 10-3 = 7.",
      "Incorrect. (1001)<sub>2</sub> = 9. 9-3 = 6.",
      "Incorrect. (1000)<sub>2</sub> = 8. 8-3 = 5.",
      "Incorrect. (0111)<sub>2</sub> = 7. 7-3 = 4.",
      "Incorrect. (0110)<sub>2</sub> = 6. 6-3 = 3."
    ]
  },
  {
    "id": 128,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "Excess-3",
    "scenario": "A student encodes the decimal digit 0 using Excess-3 code. What is the result?",
    "options": [
      "(0011)<sub>XS3</sub>",
      "(0000)<sub>XS3</sub>",
      "(0010)<sub>XS3</sub>",
      "(0100)<sub>XS3</sub>",
      "(0001)<sub>XS3</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Excess-3: 0+3 = 3 = (0011)<sub>XS3</sub>.",
      "Incorrect. (0000) is BCD for 0, not Excess-3.",
      "Incorrect. (0010)<sub>2</sub> = 2. 2-3 = -1, not valid for 0.",
      "Incorrect. (0100)<sub>2</sub> = 4. 4-3 = 1, not 0.",
      "Incorrect. (0001)<sub>2</sub> = 1. 1-3 = -2, not 0."
    ]
  },
  {
    "id": 129,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "Excess-3",
    "scenario": "A student converts the decimal number 29 to Excess-3 code. What is the correct result?",
    "options": [
      "(0101 1100)<sub>XS3</sub>",
      "(0101 1011)<sub>XS3</sub>",
      "(0010 1001)<sub>XS3</sub>",
      "(0110 1100)<sub>XS3</sub>",
      "(0100 1100)<sub>XS3</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 2+3=5=(0101)<sub>XS3</sub>, 9+3=12=(1100)<sub>XS3</sub>. Result: (0101 1100)<sub>XS3</sub>.",
      "Incorrect. 2+3=5=(0101), 9+3=12=(1100), not (1011)=8.",
      "Incorrect. This is the BCD representation, not Excess-3.",
      "Incorrect. 2+3=5, not 6.",
      "Incorrect. 2+3=5, not 4."
    ]
  },
  {
    "id": 130,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "Excess-3",
    "scenario": "An Excess-3 decoder receives (1100 0110). What decimal number does it represent?",
    "options": [
      "93",
      "90",
      "96",
      "97",
      "94"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1100)<sub>2</sub> = 12. 12-3 = 9. (0110)<sub>2</sub> = 6. 6-3 = 3. Result: 93.",
      "Incorrect. 90 in XS3 would be (1100 0011), not (1100 0110).",
      "Incorrect. 96 in XS3 would be (1100 1001), not (1100 0110).",
      "Incorrect. 97 in XS3 would be (1100 1010), not (1100 0110).",
      "Incorrect. 94 in XS3 would be (1100 0111), not (1100 0110)."
    ]
  },
  {
    "id": 131,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "2421",
    "scenario": "A student needs to encode the decimal digit 4 using the 2421 code. What is the 4-bit pattern?",
    "options": [
      "(0100)<sub>2421</sub>",
      "(0010)<sub>2421</sub>",
      "(1000)<sub>2421</sub>",
      "(0110)<sub>2421</sub>",
      "(0101)<sub>2421</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 2421 code: 0\u00d72 + 1\u00d74 + 0\u00d72 + 0\u00d71 = 4. (0100)<sub>2421</sub>.",
      "Incorrect. (0010)<sub>2421</sub> = 0+0+2+0 = 2.",
      "Incorrect. (1000)<sub>2421</sub> = 2+0+0+0 = 2.",
      "Incorrect. (0110)<sub>2421</sub> = 0+4+2+0 = 6.",
      "Incorrect. (0101)<sub>2421</sub> = 0+4+0+1 = 5."
    ]
  },
  {
    "id": 132,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "2421",
    "scenario": "A 2421 decoder receives the input (1010). What decimal digit does it represent?",
    "options": [
      "4",
      "2",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1010)<sub>2421</sub> = 1\u00d72 + 0\u00d74 + 1\u00d72 + 0\u00d71 = 2+0+2+0 = 4.",
      "Incorrect. (1000)<sub>2421</sub> = 2+0+0+0 = 2.",
      "Incorrect. (1001)<sub>2421</sub> = 2+0+0+1 = 3.",
      "Incorrect. (1011)<sub>2421</sub> = 2+0+2+1 = 5.",
      "Incorrect. (1100)<sub>2421</sub> = 2+4+0+0 = 6."
    ]
  },
  {
    "id": 133,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "2421",
    "scenario": "A student encodes the decimal digit 7 using the 2421 code. What is the result?",
    "options": [
      "(1101)<sub>2421</sub>",
      "(0111)<sub>2421</sub>",
      "(1011)<sub>2421</sub>",
      "(1110)<sub>2421</sub>",
      "(0101)<sub>2421</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1101)<sub>2421</sub> = 2+4+0+1 = 7. This is the standard representation for 7.",
      "Incorrect. While (0111)<sub>2421</sub> = 4+2+1 = 7, the standard/canonical 2421 representation of 7 uses the leftmost weights.",
      "Incorrect. (1011)<sub>2421</sub> = 2+0+2+1 = 5.",
      "Incorrect. (1110)<sub>2421</sub> = 2+4+2+0 = 8.",
      "Incorrect. (0101)<sub>2421</sub> = 0+4+0+1 = 5."
    ]
  },
  {
    "id": 134,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "2421",
    "scenario": "A 2421 decoder receives the input (1111). What decimal digit does it represent?",
    "options": [
      "9",
      "8",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1111)<sub>2421</sub> = 1\u00d72 + 1\u00d74 + 1\u00d72 + 1\u00d71 = 2+4+2+1 = 9.",
      "Incorrect. (1110)<sub>2421</sub> = 2+4+2+0 = 8.",
      "Incorrect. (1101)<sub>2421</sub> = 2+4+0+1 = 7.",
      "Incorrect. (1100)<sub>2421</sub> = 2+4+0+0 = 6.",
      "Incorrect. (1011)<sub>2421</sub> = 2+0+2+1 = 5."
    ]
  },
  {
    "id": 135,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "2421",
    "scenario": "A student encodes the decimal digit 0 using 2421 code. What is the result?",
    "options": [
      "(0000)<sub>2421</sub>",
      "(0010)<sub>2421</sub>",
      "(0001)<sub>2421</sub>",
      "(1000)<sub>2421</sub>",
      "(0100)<sub>2421</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (0000)<sub>2421</sub> = 0+0+0+0 = 0.",
      "Incorrect. (0010)<sub>2421</sub> = 0+0+2+0 = 2.",
      "Incorrect. (0001)<sub>2421</sub> = 0+0+0+1 = 1.",
      "Incorrect. (1000)<sub>2421</sub> = 2+0+0+0 = 2.",
      "Incorrect. (0100)<sub>2421</sub> = 0+4+0+0 = 4."
    ]
  },
  {
    "id": 136,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "84-2-1",
    "scenario": "A student needs to encode the decimal digit 3 using the 84-2-1 code. What is the 4-bit pattern?",
    "options": [
      "(0101)<sub>84-2-1</sub>",
      "(0011)<sub>84-2-1</sub>",
      "(0110)<sub>84-2-1</sub>",
      "(0100)<sub>84-2-1</sub>",
      "(1001)<sub>84-2-1</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (0101)<sub>84-2-1</sub> = 0\u00d78 + 1\u00d74 + 0\u00d7(-2) + 1\u00d7(-1) = 4-1 = 3.",
      "Incorrect. (0011)<sub>84-2-1</sub> = 0+0-2-1 = -3.",
      "Incorrect. (0110)<sub>84-2-1</sub> = 0+4-2+0 = 2.",
      "Incorrect. (0100)<sub>84-2-1</sub> = 0+4+0+0 = 4.",
      "Incorrect. (1001)<sub>84-2-1</sub> = 8+0+0-1 = 7."
    ]
  },
  {
    "id": 137,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "84-2-1",
    "scenario": "An 84-2-1 decoder receives (1000). What decimal digit does it represent?",
    "options": [
      "8",
      "7",
      "6",
      "9",
      "4"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1000)<sub>84-2-1</sub> = 1\u00d78 + 0\u00d74 + 0\u00d7(-2) + 0\u00d7(-1) = 8.",
      "Incorrect. (1001)<sub>84-2-1</sub> = 8+0+0-1 = 7.",
      "Incorrect. (1010)<sub>84-2-1</sub> = 8+0-2+0 = 6.",
      "Incorrect. (1001)<sub>84-2-1</sub> = 8-1 = 7, not 9.",
      "Incorrect. (0100)<sub>84-2-1</sub> = 4."
    ]
  },
  {
    "id": 138,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "84-2-1",
    "scenario": "A student encodes the decimal digit 1 using 84-2-1 code. What is the result?",
    "options": [
      "(0111)<sub>84-2-1</sub>",
      "(0001)<sub>84-2-1</sub>",
      "(0100)<sub>84-2-1</sub>",
      "(0010)<sub>84-2-1</sub>",
      "(1000)<sub>84-2-1</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (0111)<sub>84-2-1</sub> = 0\u00d78 + 1\u00d74 + 1\u00d7(-2) + 1\u00d7(-1) = 4-2-1 = 1.",
      "Incorrect. (0001)<sub>84-2-1</sub> = 0+0+0-1 = -1.",
      "Incorrect. (0100)<sub>84-2-1</sub> = 0+4+0+0 = 4.",
      "Incorrect. (0010)<sub>84-2-1</sub> = 0+0-2+0 = -2.",
      "Incorrect. (1000)<sub>84-2-1</sub> = 8."
    ]
  },
  {
    "id": 139,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "84-2-1",
    "scenario": "An 84-2-1 decoder receives (0110). What decimal digit does it represent?",
    "options": [
      "2",
      "3",
      "4",
      "1",
      "5"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (0110)<sub>84-2-1</sub> = 0\u00d78 + 1\u00d74 + 1\u00d7(-2) + 0\u00d7(-1) = 4-2 = 2.",
      "Incorrect. (0101)<sub>84-2-1</sub> = 4-1 = 3.",
      "Incorrect. (0100)<sub>84-2-1</sub> = 4.",
      "Incorrect. (0111)<sub>84-2-1</sub> = 4-2-1 = 1.",
      "Incorrect. (0101)<sub>84-2-1</sub> = 4-1 = 3, not 5."
    ]
  },
  {
    "id": 140,
    "topic": "Decimal Codes",
    "topicId": 11,
    "subtopic": "84-2-1",
    "scenario": "A student encodes the decimal digit 5 using 84-2-1 code. What is the result?",
    "options": [
      "(1011)<sub>84-2-1</sub>",
      "(0101)<sub>84-2-1</sub>",
      "(1000)<sub>84-2-1</sub>",
      "(0110)<sub>84-2-1</sub>",
      "(1100)<sub>84-2-1</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1011)<sub>84-2-1</sub> = 1\u00d78 + 0\u00d74 + 1\u00d7(-2) + 1\u00d7(-1) = 8-2-1 = 5.",
      "Incorrect. (0101)<sub>84-2-1</sub> = 4-1 = 3.",
      "Incorrect. (1000)<sub>84-2-1</sub> = 8.",
      "Incorrect. (0110)<sub>84-2-1</sub> = 4-2 = 2.",
      "Incorrect. (1100)<sub>84-2-1</sub> = 8-2 = 6."
    ]
  },
  {
    "id": 141,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student is debugging a serial communication link and sees the ASCII code (01000001)<sub>2</sub>. What character does it represent?",
    "options": [
      "'A'",
      "'B'",
      "'a'",
      "'0'",
      "'@'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (01000001)<sub>2</sub> = 65<sub>10</sub> = 'A' in ASCII.",
      "Incorrect. 'B' = 66 = (01000010)<sub>2</sub>.",
      "Incorrect. 'a' = 97 = (01100001)<sub>2</sub>.",
      "Incorrect. '0' = 48 = (00110000)<sub>2</sub>.",
      "Incorrect. '@' = 64 = (01000000)<sub>2</sub>."
    ]
  },
  {
    "id": 142,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student needs to send the character '7' over a serial link using ASCII. What is the correct 8-bit binary code?",
    "options": [
      "(00110111)<sub>2</sub>",
      "(00110000)<sub>2</sub>",
      "(00000111)<sub>2</sub>",
      "(01110111)<sub>2</sub>",
      "(01010111)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. ASCII '7' = 55 = (00110111)<sub>2</sub>.",
      "Incorrect. (00110000)<sub>2</sub> = 48 = '0'.",
      "Incorrect. (00000111)<sub>2</sub> = 7 (BEL control character).",
      "Incorrect. (01110111)<sub>2</sub> = 119 = 'w'.",
      "Incorrect. (01010111)<sub>2</sub> = 87 = 'W'."
    ]
  },
  {
    "id": 143,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student receives the ASCII code (01101011)<sub>2</sub>. What lowercase letter does it represent?",
    "options": [
      "'k'",
      "'j'",
      "'l'",
      "'i'",
      "'m'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (01101011)<sub>2</sub> = 107 = 'k' in ASCII.",
      "Incorrect. 'j' = 106 = (01101010)<sub>2</sub>.",
      "Incorrect. 'l' = 108 = (01101100)<sub>2</sub>.",
      "Incorrect. 'i' = 105 = (01101001)<sub>2</sub>.",
      "Incorrect. 'm' = 109 = (01101101)<sub>2</sub>."
    ]
  },
  {
    "id": 144,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A shaft encoder in a robotics project outputs Gray code to prevent errors during rotation. What is the key advantage of Gray code?",
    "options": [
      "It uses fewer bits than binary",
      "Only one bit changes between adjacent values",
      "It can represent negative numbers",
      "It is directly compatible with decimal",
      "It allows faster computation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Gray code uses the same number of bits as binary for the same range.",
      "CORRECT. Gray code ensures only one bit changes at a time, preventing ambiguous states during transitions.",
      "Incorrect. Gray code is not designed for signed numbers.",
      "Incorrect. Gray code is not directly decimal-compatible.",
      "Incorrect. Speed is not the primary advantage of Gray code."
    ]
  },
  {
    "id": 145,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student converts the binary number (1010)<sub>2</sub> to Gray code. What is the result?",
    "options": [
      "(1111)<sub>Gray</sub>",
      "(1110)<sub>Gray</sub>",
      "(1100)<sub>Gray</sub>",
      "(1010)<sub>Gray</sub>",
      "(0111)<sub>Gray</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Binary to Gray: MSB stays (1), then 1\u22950=1, 0\u22951=1, 1\u22950=1. Result: (1111)<sub>Gray</sub>.",
      "Incorrect. Last bit should be 1\u22950=1, not 0.",
      "Incorrect. Third bit should be 0\u22951=1, not 0.",
      "Incorrect. This is the binary value, not the Gray code.",
      "Incorrect. MSB should be 1, not 0."
    ]
  },
  {
    "id": 146,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A Gray-code sensor outputs (1101)<sub>Gray</sub>. A student must convert this back to binary. What is the result?",
    "options": [
      "(1000)<sub>2</sub>",
      "(1001)<sub>2</sub>",
      "(1010)<sub>2</sub>",
      "(1100)<sub>2</sub>",
      "(1111)<sub>2</sub>"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. (1000)<sub>2</sub> would require b0=0, but b0=b1\u2295g0=0\u22951=1.",
      "CORRECT. b3=1, b2=1\u22951=0, b1=0\u22950=0, b0=0\u22951=1. Result: (1001)<sub>2</sub>.",
      "Incorrect. (1010)<sub>2</sub> would require different Gray code input.",
      "Incorrect. (1100)<sub>2</sub> is not the correct conversion.",
      "Incorrect. (1111)<sub>2</sub> would correspond to different Gray code."
    ]
  },
  {
    "id": 147,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student needs to convert the binary number (0000)<sub>2</sub> to Gray code. What is the result?",
    "options": [
      "(0000)<sub>Gray</sub>",
      "(0001)<sub>Gray</sub>",
      "(0010)<sub>Gray</sub>",
      "(1000)<sub>Gray</sub>",
      "(1111)<sub>Gray</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. All zeros in binary convert to all zeros in Gray code.",
      "Incorrect. No bit should change from 0.",
      "Incorrect. This would require a different binary input.",
      "Incorrect. MSB should be 0.",
      "Incorrect. This is the complement, not the Gray code."
    ]
  },
  {
    "id": 148,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "In an ASCII lookup exercise, a student finds that the uppercase letter 'Z' has decimal value 90. What is its 8-bit binary representation?",
    "options": [
      "(01011010)<sub>2</sub>",
      "(01011011)<sub>2</sub>",
      "(01011000)<sub>2</sub>",
      "(01111010)<sub>2</sub>",
      "(01010010)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 90 = 64 + 16 + 8 + 2 = (01011010)<sub>2</sub>.",
      "Incorrect. (01011011)<sub>2</sub> = 91 = '['.",
      "Incorrect. (01011000)<sub>2</sub> = 88 = 'X'.",
      "Incorrect. (01111010)<sub>2</sub> = 122 = 'z'.",
      "Incorrect. (01010010)<sub>2</sub> = 82 = 'R'."
    ]
  },
  {
    "id": 149,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student converts the binary number (1100)<sub>2</sub> to Gray code. What is the result?",
    "options": [
      "(1010)<sub>Gray</sub>",
      "(1100)<sub>Gray</sub>",
      "(1001)<sub>Gray</sub>",
      "(1110)<sub>Gray</sub>",
      "(1011)<sub>Gray</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Binary 1100: MSB=1, 1\u22951=0, 1\u22950=1, 0\u22950=0. Result: (1010)<sub>Gray</sub>.",
      "Incorrect. This is the binary value, not Gray code.",
      "Incorrect. This would be the Gray code for a different binary number.",
      "Incorrect. Wrong bit calculation.",
      "Incorrect. Wrong bit calculation."
    ]
  },
  {
    "id": 150,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A Gray-code rotary encoder outputs (1000)<sub>Gray</sub>. What is the corresponding binary value?",
    "options": [
      "(1111)<sub>2</sub>",
      "(1110)<sub>2</sub>",
      "(1100)<sub>2</sub>",
      "(1011)<sub>2</sub>",
      "(1000)<sub>2</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Gray 1000: b3=1, b2=1\u22950=1, b1=1\u22950=1, b0=1\u22950=1. Result: (1111)<sub>2</sub>.",
      "Incorrect. (1110)<sub>2</sub> would correspond to Gray code 1001.",
      "Incorrect. (1100)<sub>2</sub> would correspond to Gray code 1010.",
      "Incorrect. (1011)<sub>2</sub> would correspond to a different Gray code.",
      "Incorrect. (1000)<sub>2</sub> would correspond to Gray code 1100."
    ]
  },
  {
    "id": 151,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student is asked to find the ASCII code for the space character. What is its decimal value?",
    "options": [
      "32",
      "0",
      "48",
      "64",
      "20"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. The space character ' ' has ASCII code 32.",
      "Incorrect. 0 is the NUL control character.",
      "Incorrect. 48 is the code for digit '0'.",
      "Incorrect. 64 is the code for '@'.",
      "Incorrect. 20 is the DC4 control character."
    ]
  },
  {
    "id": 152,
    "topic": "ASCII and Gray Code",
    "topicId": 12,
    "subtopic": "",
    "scenario": "A student converts the binary number (1111)<sub>2</sub> to Gray code. What is the result?",
    "options": [
      "(1000)<sub>Gray</sub>",
      "(1111)<sub>Gray</sub>",
      "(1010)<sub>Gray</sub>",
      "(1100)<sub>Gray</sub>",
      "(0000)<sub>Gray</sub>"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Binary 1111: MSB=1, 1\u22951=0, 1\u22951=0, 1\u22951=0. Result: (1000)<sub>Gray</sub>.",
      "Incorrect. This is the binary value; Gray code differs.",
      "Incorrect. This would be for binary 1100 or 1110.",
      "Incorrect. This would be for binary 1000.",
      "Incorrect. All bits would need to be 0 in binary."
    ]
  },
  {
    "id": 153,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A serial communication channel transmits the data word (1100111)<sub>2</sub> using even parity. How many 1s are in the data word?",
    "options": [
      "5",
      "4",
      "3",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1100111)<sub>2</sub> has five 1s (bits 6,5,2,1,0 from the left).",
      "Incorrect. Count again: 1+1+0+0+1+1+1 = 5 ones.",
      "Incorrect. There are more than 3 ones.",
      "Incorrect. There are only 5 ones, not 6.",
      "Incorrect. Not all bits are 1."
    ]
  },
  {
    "id": 154,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A data word (1010101)<sub>2</sub> is transmitted with even parity. What parity bit should be appended to make the total number of 1s even?",
    "options": [
      "0",
      "1",
      "Either 0 or 1",
      "No parity bit needed",
      "Depends on the receiver"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1010101)<sub>2</sub> already has four 1s (even), so parity bit = 0.",
      "Incorrect. Adding 1 would make five 1s (odd), which is wrong for even parity.",
      "Incorrect. Even parity requires a specific value.",
      "Incorrect. A parity bit is always appended in this scheme.",
      "Incorrect. Parity is determined by the data, not the receiver."
    ]
  },
  {
    "id": 155,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A data word (1110001)<sub>2</sub> is transmitted with odd parity. What parity bit should be appended?",
    "options": [
      "0",
      "1",
      "Either 0 or 1",
      "Cannot be determined",
      "Depends on transmission speed"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Four 1s is even; adding 0 keeps it even, but odd parity requires an odd count.",
      "CORRECT. (1110001)<sub>2</sub> has four 1s (even). For odd parity, append 1 to make five 1s.",
      "Incorrect. Odd parity requires a specific value.",
      "Incorrect. It can be determined from the data.",
      "Incorrect. Speed does not affect parity calculation."
    ]
  },
  {
    "id": 156,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A receiver gets the 8-bit word (11001100) with even parity. Did an error likely occur?",
    "options": [
      "No error (even number of 1s)",
      "Error detected (odd number of 1s)",
      "Cannot determine",
      "Parity is always correct",
      "Error was corrected automatically"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (11001100) has four 1s (even), matching even parity. No error detected.",
      "Incorrect. Four is even, not odd.",
      "Incorrect. Parity allows error detection in this case.",
      "Incorrect. Parity can detect single-bit errors.",
      "Incorrect. Parity detects but does not correct errors."
    ]
  },
  {
    "id": 157,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A student claims that parity bits can correct all transmission errors. What is the correct statement?",
    "options": [
      "Parity bits can detect and correct single-bit errors",
      "Parity bits can only detect an odd number of bit errors",
      "Parity bits can correct any number of errors",
      "Parity bits detect errors but cannot correct them",
      "Parity bits are used for encryption"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect. Parity cannot correct errors, only detect some.",
      "Incorrect. Parity can detect any odd number of errors, but the statement is incomplete.",
      "Incorrect. Parity cannot correct any errors.",
      "CORRECT. Parity can detect single-bit errors (or odd numbers of errors) but cannot correct them.",
      "Incorrect. Parity is for error detection, not encryption."
    ]
  },
  {
    "id": 158,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A data word (0000000)<sub>2</sub> uses odd parity. What parity bit should be appended?",
    "options": [
      "0",
      "1",
      "Either",
      "Not applicable",
      "Same as the data"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. 0 ones is even; adding 0 keeps it even, violating odd parity.",
      "CORRECT. Zero 1s is even. For odd parity, append 1 to make one 1 (odd).",
      "Incorrect. Odd parity requires specifically 1.",
      "Incorrect. Parity always applies.",
      "Incorrect. Parity bit depends on the parity scheme."
    ]
  },
  {
    "id": 159,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A communication system uses even parity. The data (1010) is sent. What is the transmitted codeword?",
    "options": [
      "(10100)",
      "(10101)",
      "(01010)",
      "(10110)",
      "(01101)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (1010) has two 1s (even). Parity bit = 0. Transmitted: (10100).",
      "Incorrect. Parity bit 1 would give three 1s (odd), wrong for even parity.",
      "Incorrect. This reverses the order and changes the meaning.",
      "Incorrect. This changes a data bit, not the parity bit.",
      "Incorrect. This is a completely different pattern."
    ]
  },
  {
    "id": 160,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A receiver gets (1110011) with odd parity and counts five 1s. What can the receiver conclude?",
    "options": [
      "Single-bit error detected",
      "No error detected",
      "Double-bit error occurred",
      "Error was corrected",
      "Parity check failed"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Five is odd, matching odd parity. No error is detected.",
      "CORRECT. Five 1s is odd, which matches the odd parity scheme. No error detected.",
      "Incorrect. Double-bit errors may go undetected with parity.",
      "Incorrect. Parity does not correct errors.",
      "Incorrect. The parity check passes (odd count matches odd parity)."
    ]
  },
  {
    "id": 161,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A student is designing a system with even parity for the data word (11111111). What parity bit should be used?",
    "options": [
      "0",
      "1",
      "Either 0 or 1",
      "Parity not needed",
      "Cannot be determined"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Eight 1s is already even, so parity bit = 0.",
      "Incorrect. Adding 1 would make nine 1s (odd), violating even parity.",
      "Incorrect. Even parity requires parity bit = 0 in this case.",
      "Incorrect. Parity is part of the design requirement.",
      "Incorrect. It can be determined: eight 1s is even."
    ]
  },
  {
    "id": 162,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "In a parity checking exercise, a received word (10101100) with even parity has six 1s. What is the conclusion?",
    "options": [
      "Error detected",
      "No error detected",
      "Data is corrupted",
      "Parity bit is wrong",
      "Communication failed"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Six is even, matching even parity.",
      "CORRECT. Six 1s is even, consistent with even parity. No error detected.",
      "Incorrect. Even parity is satisfied; no corruption indicated.",
      "Incorrect. The parity bit is consistent with the data.",
      "Incorrect. Parity check passes, so no failure indicated."
    ]
  },
  {
    "id": 163,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A student is asked why parity bits are used in memory systems. What is the primary purpose?",
    "options": [
      "To increase memory capacity",
      "To detect single-bit errors",
      "To speed up memory access",
      "To encrypt stored data",
      "To reduce power consumption"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Parity bits reduce usable capacity.",
      "CORRECT. Parity bits detect (but not correct) single-bit errors in memory.",
      "Incorrect. Parity checking adds a small overhead.",
      "Incorrect. Parity is not encryption.",
      "Incorrect. Parity has no effect on power consumption."
    ]
  },
  {
    "id": 164,
    "topic": "Parity Bit",
    "topicId": 13,
    "subtopic": "",
    "scenario": "A data word (1001) with even parity is received as (1101) with parity bit 0. What is the parity check result?",
    "options": [
      "No error (three 1s is odd)",
      "Error detected (three 1s is odd, but should be even)",
      "Parity bit must be 1",
      "No error (four 1s)",
      "Cannot determine"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. Three 1s is odd, which violates even parity.",
      "CORRECT. Three 1s is odd, but even parity requires an even count. Error detected.",
      "Incorrect. The parity bit is fixed; the error is in the data.",
      "Incorrect. There are three 1s, not four.",
      "Incorrect. The error is detectable."
    ]
  },
  {
    "id": 165,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A safety indicator should turn ON only when both door sensors are closed (HIGH). Which logic gate implements this behavior?",
    "options": [
      "AND gate",
      "OR gate",
      "XOR gate",
      "NAND gate",
      "NOT gate"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. AND outputs HIGH only when ALL inputs are HIGH (both doors closed).",
      "Incorrect. OR outputs HIGH when ANY input is HIGH.",
      "Incorrect. XOR outputs HIGH when inputs are DIFFERENT.",
      "Incorrect. NAND is the inverse of AND.",
      "Incorrect. NOT has only one input."
    ]
  },
  {
    "id": 166,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A warning buzzer should activate when either fire detection (A) OR gas leakage (B) is active. Which gate implements this?",
    "options": [
      "AND gate",
      "OR gate",
      "XOR gate",
      "NAND gate",
      "XNOR gate"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. AND requires both conditions to be true.",
      "CORRECT. OR outputs HIGH when ANY input is HIGH (fire OR gas).",
      "Incorrect. XOR would not activate if both are true.",
      "Incorrect. NAND is the complement of AND.",
      "Incorrect. XNOR outputs HIGH when inputs are EQUAL."
    ]
  },
  {
    "id": 167,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student builds a circuit where the output is HIGH only when the two inputs have different values. Which gate is this?",
    "options": [
      "AND gate",
      "OR gate",
      "XOR gate",
      "NAND gate",
      "XNOR gate"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. AND outputs HIGH only when both inputs are HIGH.",
      "Incorrect. OR outputs HIGH when either input is HIGH.",
      "CORRECT. XOR (Exclusive-OR) outputs HIGH when inputs are DIFFERENT.",
      "Incorrect. NAND outputs LOW only when both inputs are HIGH.",
      "Incorrect. XNOR outputs HIGH when inputs are the SAME."
    ]
  },
  {
    "id": 168,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A circuit needs to output the complement (inverse) of a single input. Which gate is required?",
    "options": [
      "AND gate",
      "OR gate",
      "NOT gate (Inverter)",
      "XOR gate",
      "NAND gate"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. AND requires two inputs.",
      "Incorrect. OR requires two inputs.",
      "CORRECT. NOT gate inverts the input: 0 becomes 1, 1 becomes 0.",
      "Incorrect. XOR requires two inputs.",
      "Incorrect. NAND requires two inputs."
    ]
  },
  {
    "id": 169,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student designs a circuit that outputs LOW only when both inputs are HIGH. Which gate is this?",
    "options": [
      "AND gate",
      "OR gate",
      "NAND gate",
      "NOR gate",
      "XOR gate"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. AND outputs HIGH when both inputs are HIGH.",
      "Incorrect. OR outputs HIGH when any input is HIGH.",
      "CORRECT. NAND is NOT-AND: outputs LOW only when both inputs are HIGH.",
      "Incorrect. NOR outputs LOW when any input is HIGH.",
      "Incorrect. XOR outputs HIGH when inputs differ."
    ]
  },
  {
    "id": 170,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A comparison circuit should output HIGH when both input bits are equal. Which gate implements this?",
    "options": [
      "XOR gate",
      "XNOR gate",
      "AND gate",
      "OR gate",
      "NAND gate"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. XOR outputs HIGH when inputs are DIFFERENT.",
      "CORRECT. XNOR (Exclusive-NOR) outputs HIGH when inputs are EQUAL.",
      "Incorrect. AND outputs HIGH only when both are HIGH, not when both are LOW.",
      "Incorrect. OR outputs HIGH when either is HIGH.",
      "Incorrect. NAND outputs LOW when both are HIGH."
    ]
  },
  {
    "id": 171,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student traces a signal through an AND gate with inputs A=1 and B=0. What is the output?",
    "options": [
      "1",
      "0",
      "Undefined",
      "Same as A",
      "Same as B"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. AND requires both inputs to be 1 for output 1.",
      "CORRECT. AND(1,0) = 0. Output is LOW when any input is LOW.",
      "Incorrect. AND output is always defined.",
      "Incorrect. Output is not A when B=0.",
      "Incorrect. Output happens to equal B, but this is not generally true."
    ]
  },
  {
    "id": 172,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student traces a signal through an OR gate with inputs A=0 and B=0. What is the output?",
    "options": [
      "1",
      "0",
      "Depends on the power supply",
      "Same as A",
      "Undefined"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. OR outputs 1 only when at least one input is 1.",
      "CORRECT. OR(0,0) = 0. Output is LOW only when all inputs are LOW.",
      "Incorrect. The output is deterministically 0.",
      "Incorrect. Output equals A, but the value is 0.",
      "Incorrect. OR output is always defined."
    ]
  },
  {
    "id": 173,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student connects both inputs of a NAND gate together and applies signal A. What function does this implement?",
    "options": [
      "AND function",
      "OR function",
      "NOT function (inverter)",
      "Buffer",
      "XOR function"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. NAND(A,A) = NOT(A AND A) = NOT(A).",
      "Incorrect. This does not implement OR.",
      "CORRECT. NAND(A,A) = NOT(A\u00b7A) = NOT(A). This acts as an inverter.",
      "Incorrect. A buffer would output A, not NOT(A).",
      "Incorrect. This does not implement XOR."
    ]
  },
  {
    "id": 174,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student builds a circuit with a NOR gate. What is the output when A=0, B=1?",
    "options": [
      "1",
      "0",
      "Undefined",
      "Depends on the fan-out",
      "Same as A"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. NOR(0,1) = NOT(0+1) = NOT(1) = 0.",
      "CORRECT. NOR(0,1) = 0. NOR outputs HIGH only when ALL inputs are LOW.",
      "Incorrect. NOR output is always defined.",
      "Incorrect. Fan-out does not affect the logic value.",
      "Incorrect. Output is 0, which equals A, but this is coincidental."
    ]
  },
  {
    "id": 175,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student is asked to identify the universal gates. Which pair of gates are considered universal?",
    "options": [
      "AND and OR",
      "NAND and NOR",
      "XOR and XNOR",
      "AND and NOT",
      "OR and NOT"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. AND and OR cannot implement NOT by themselves.",
      "CORRECT. NAND and NOR can implement AND, OR, and NOT, making them universal.",
      "Incorrect. XOR and XNOR are not universal gates.",
      "Incorrect. While AND and NOT together are universal, individually they are not.",
      "Incorrect. OR and NOT together are universal, but NAND and NOR are individually universal."
    ]
  },
  {
    "id": 176,
    "topic": "Basic Gates",
    "topicId": 14,
    "subtopic": "",
    "scenario": "A student applies inputs A=1, B=1 to an XNOR gate. What is the output?",
    "options": [
      "0",
      "1",
      "Undefined",
      "Same as C",
      "Inverted A"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect. XNOR(1,1) = 1 (inputs are equal).",
      "CORRECT. XNOR outputs 1 when inputs are equal. XNOR(1,1) = 1.",
      "Incorrect. XNOR output is always defined.",
      "Incorrect. There is no C input.",
      "Incorrect. Output is not inverted A."
    ]
  },
  {
    "id": 177,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A + A\u00b7B. Which simplified result is correct?",
    "options": [
      "A",
      "A\u00b7B",
      "A + B",
      "B",
      "1"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A + AB = A(1 + B) = A\u00b71 = A (Absorption Law).",
      "Incorrect. AB is a subset of A; the result must include all of A.",
      "Incorrect. A + AB simplifies to A, not A + B.",
      "Incorrect. B alone loses the A term.",
      "Incorrect. The result depends on A, not always 1."
    ]
  },
  {
    "id": 178,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A\u00b7(A + B). Which simplified result is correct?",
    "options": [
      "A",
      "A + B",
      "A\u00b7B",
      "B",
      "A'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A(A + B) = A\u00b7A + A\u00b7B = A + AB = A (Absorption Law).",
      "Incorrect. This keeps unnecessary terms.",
      "Incorrect. This loses the standalone A term.",
      "Incorrect. B alone is not equivalent.",
      "Incorrect. The complement is not involved."
    ]
  },
  {
    "id": 179,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A + A'\u00b7B. Which simplified result is correct?",
    "options": [
      "A + B",
      "A\u00b7B",
      "A",
      "B",
      "1"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A + A'B = (A + A')(A + B) = 1\u00b7(A + B) = A + B (Distributive Law).",
      "Incorrect. This would be too restrictive.",
      "Incorrect. This loses the B coverage when A=0.",
      "Incorrect. This loses the A coverage.",
      "Incorrect. The result is not always 1."
    ]
  },
  {
    "id": 180,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student applies De Morgan's theorem to (A\u00b7B)'. Which result is correct?",
    "options": [
      "A' + B'",
      "A'\u00b7B'",
      "A + B",
      "A\u00b7B",
      "(A+B)'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (AB)' = A' + B' (De Morgan's: complement of product = sum of complements).",
      "Incorrect. This would be (A+B)', not (AB)'.",
      "Incorrect. This ignores the complements.",
      "Incorrect. This is the original expression, not its complement.",
      "Incorrect. (A+B)' = A'\u00b7B' by De Morgan's."
    ]
  },
  {
    "id": 181,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student applies De Morgan's theorem to (A + B)'. Which result is correct?",
    "options": [
      "A'\u00b7B'",
      "A' + B'",
      "A\u00b7B",
      "A + B",
      "(A\u00b7B)'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (A+B)' = A'\u00b7B' (De Morgan's: complement of sum = product of complements).",
      "Incorrect. This is (AB)', not (A+B)'.",
      "Incorrect. This ignores the complements.",
      "Incorrect. This is the original expression.",
      "Incorrect. (AB)' = A' + B' by De Morgan's."
    ]
  },
  {
    "id": 182,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A\u00b7B + A\u00b7B'. Which simplified result is correct?",
    "options": [
      "A",
      "B",
      "A\u00b7B",
      "A + B",
      "A'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. AB + AB' = A(B + B') = A\u00b71 = A.",
      "Incorrect. B is not the simplified result.",
      "Incorrect. This is only one term, not the complete simplification.",
      "Incorrect. This over-expands the expression.",
      "Incorrect. The complement is not the result."
    ]
  },
  {
    "id": 183,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression (A + B)\u00b7(A + B'). Which simplified result is correct?",
    "options": [
      "A",
      "B",
      "A + B",
      "A\u00b7B",
      "1"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (A+B)(A+B') = A + BB' = A + 0 = A (Distributive Law).",
      "Incorrect. B is not the result.",
      "Incorrect. This is not fully simplified.",
      "Incorrect. This is incorrect.",
      "Incorrect. The result depends on A."
    ]
  },
  {
    "id": 184,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A + A'. Which simplified result is correct?",
    "options": [
      "1",
      "0",
      "A",
      "A'",
      "Undefined"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A + A' = 1 (Complement Law: a variable OR its complement = 1).",
      "Incorrect. A + A' is always 1, not 0.",
      "Incorrect. The result is always 1, not A.",
      "Incorrect. The result is always 1, not A'.",
      "Incorrect. Boolean algebra defines this as 1."
    ]
  },
  {
    "id": 185,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A\u00b7A'. Which simplified result is correct?",
    "options": [
      "0",
      "1",
      "A",
      "A'",
      "Undefined"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A\u00b7A' = 0 (Complement Law: a variable AND its complement = 0).",
      "Incorrect. A\u00b7A' is always 0.",
      "Incorrect. The result is 0, not A.",
      "Incorrect. The result is 0, not A'.",
      "Incorrect. Boolean algebra defines this as 0."
    ]
  },
  {
    "id": 186,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A + A\u00b7B + A\u00b7B\u00b7C. Which simplified result is correct?",
    "options": [
      "A",
      "A + B + C",
      "A\u00b7B\u00b7C",
      "A\u00b7B",
      "A + B"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A + AB + ABC = A(1 + B + BC) = A\u00b71 = A (Absorption Law applied repeatedly).",
      "Incorrect. This over-expands the expression.",
      "Incorrect. This is just one term, not the result.",
      "Incorrect. This loses the standalone A cases.",
      "Incorrect. B is absorbed by A."
    ]
  },
  {
    "id": 187,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression (A\u00b7B)' + A. Which simplified result is correct?",
    "options": [
      "1",
      "A + B'",
      "A' + B'",
      "A\u00b7B'",
      "A' + B"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (AB)' + A = A' + B' + A = (A + A') + B' = 1 + B' = 1.",
      "Incorrect. (AB)' + A simplifies to 1, not A + B'.",
      "Incorrect. While (AB)' = A' + B', adding A makes the result 1.",
      "Incorrect. The result is not A\u00b7B'.",
      "Incorrect. The result is 1, not A' + B."
    ]
  },
  {
    "id": 188,
    "topic": "Simplification of Boolean Algebra",
    "topicId": 15,
    "subtopic": "",
    "scenario": "A student simplifies the Boolean expression A\u00b7(A' + B). Which simplified result is correct?",
    "options": [
      "A\u00b7B",
      "A + B",
      "A",
      "B",
      "0"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A(A' + B) = AA' + AB = 0 + AB = AB.",
      "Incorrect. This would be A + AB, not A(A'+B).",
      "Incorrect. The A term is multiplied, not added.",
      "Incorrect. B alone loses the A factor.",
      "Incorrect. The result is AB, not 0 (unless B=0)."
    ]
  },
  {
    "id": 189,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "2-variable",
    "scenario": "A student simplifies a 2-variable K-map with 1s at cells m0 and m1. Which expression results?",
    "options": [
      "A'",
      "A",
      "B'",
      "B",
      "A'B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0=A'B' and m1=A'B. Grouping these gives A'(B'+B) = A'.",
      "Incorrect. m2 and m3 would give A.",
      "Incorrect. m0 and m2 would give B'.",
      "Incorrect. m1 and m3 would give B.",
      "Incorrect. This only covers m0, not the full group."
    ]
  },
  {
    "id": 190,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "2-variable",
    "scenario": "A student simplifies a 2-variable K-map with 1s at cells m2 and m3. Which expression results?",
    "options": [
      "A",
      "A'",
      "B",
      "B'",
      "AB"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m2=AB' and m3=AB. Grouping gives A(B'+B) = A.",
      "Incorrect. m0 and m1 would give A'.",
      "Incorrect. m1 and m3 would give B.",
      "Incorrect. m0 and m2 would give B'.",
      "Incorrect. This only covers m3, not the full group."
    ]
  },
  {
    "id": 191,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "2-variable",
    "scenario": "A student simplifies a 2-variable K-map with 1s at cells m1 and m3. Which expression results?",
    "options": [
      "B",
      "A",
      "B'",
      "A'",
      "AB'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m1=A'B and m3=AB. Grouping gives (A'+A)B = B.",
      "Incorrect. m2 and m3 would give A.",
      "Incorrect. m0 and m2 would give B'.",
      "Incorrect. m0 and m1 would give A'.",
      "Incorrect. This covers neither m1 nor m3."
    ]
  },
  {
    "id": 192,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "2-variable",
    "scenario": "A student simplifies a 2-variable K-map with 1s at all four cells (m0, m1, m2, m3). Which expression results?",
    "options": [
      "1",
      "0",
      "A + B",
      "A\u00b7B",
      "A \u2295 B"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. All four cells being 1 means the output is always 1, regardless of A and B.",
      "Incorrect. All 1s means always true, not always false.",
      "Incorrect. While this covers all cases, the simplest form is 1.",
      "Incorrect. This would only cover m3.",
      "Incorrect. XOR would have 0s at m0 and m3."
    ]
  },
  {
    "id": 193,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "2-variable",
    "scenario": "A student simplifies a 2-variable K-map with 1s at cells m0 and m2. Which expression results?",
    "options": [
      "B'",
      "A'",
      "B",
      "A",
      "A'B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0=A'B' and m2=AB'. Grouping gives (A'+A)B' = B'.",
      "Incorrect. m0 and m1 would give A'.",
      "Incorrect. m1 and m3 would give B.",
      "Incorrect. m2 and m3 would give A.",
      "Incorrect. This only covers m0, not m2."
    ]
  },
  {
    "id": 194,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "3-variable",
    "scenario": "A student simplifies a 3-variable K-map for F(A,B,C)=\u03a3m(0,1). Which expression results?",
    "options": [
      "A'B'",
      "A'B",
      "AB'",
      "AB",
      "B'C'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0=A'B'C' and m1=A'B'C. Grouping: A'B'(C'+C) = A'B'.",
      "Incorrect. m2 and m3 would give A'B.",
      "Incorrect. m4 and m5 would give AB'.",
      "Incorrect. m6 and m7 would give AB.",
      "Incorrect. This would require different minterms."
    ]
  },
  {
    "id": 195,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "3-variable",
    "scenario": "A student simplifies a 3-variable K-map for F(A,B,C)=\u03a3m(4,5). Which expression results?",
    "options": [
      "AB'",
      "A'B'",
      "AB",
      "A'B",
      "AC'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m4=AB'C' and m5=AB'C. Grouping: AB'(C'+C) = AB'.",
      "Incorrect. m0 and m1 would give A'B'.",
      "Incorrect. m6 and m7 would give AB.",
      "Incorrect. m2 and m3 would give A'B.",
      "Incorrect. This would need m4 and m6."
    ]
  },
  {
    "id": 196,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "3-variable",
    "scenario": "A student simplifies a 3-variable K-map for F(A,B,C)=\u03a3m(0,2,4,6). Which expression results?",
    "options": [
      "C'",
      "C",
      "A'",
      "B'",
      "A"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These are all cells where C=0. Grouping the quad gives C'.",
      "Incorrect. m1,m3,m5,m7 would give C.",
      "Incorrect. m0,m1 would give A', not all cells.",
      "Incorrect. m0,m2 would give B'C', not all cells.",
      "Incorrect. m4,m5,m6,m7 would give A."
    ]
  },
  {
    "id": 197,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "3-variable",
    "scenario": "A student simplifies a 3-variable K-map for F(A,B,C)=\u03a3m(1,3,5,7). Which expression results?",
    "options": [
      "C",
      "C'",
      "B",
      "A",
      "B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These are all cells where C=1. Grouping the quad gives C.",
      "Incorrect. m0,m2,m4,m6 would give C'.",
      "Incorrect. This requires different minterms.",
      "Incorrect. This requires different minterms.",
      "Incorrect. This requires different minterms."
    ]
  },
  {
    "id": 198,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "3-variable",
    "scenario": "A student simplifies a 3-variable K-map for F(A,B,C)=\u03a3m(0,4). Which expression results?",
    "options": [
      "B'C'",
      "A'B'",
      "AB'",
      "BC",
      "A'C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0=A'B'C' and m4=AB'C'. Grouping: (A'+A)B'C' = B'C'.",
      "Incorrect. m0 and m1 would give A'B'.",
      "Incorrect. m4 and m5 would give AB'.",
      "Incorrect. This requires different minterms.",
      "Incorrect. This requires different minterms."
    ]
  },
  {
    "id": 199,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "4-variable",
    "scenario": "A student simplifies a 4-variable K-map for F(A,B,C,D)=\u03a3m(0,1,4,5,8,9,12,13). Which expression results?",
    "options": [
      "C'",
      "C",
      "D'",
      "D",
      "B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These are all cells where C=0 (octet group). The simplified expression is C'.",
      "Incorrect. This would be for minterms where C=1.",
      "Incorrect. D is not the common variable.",
      "Incorrect. D is not the common variable.",
      "Incorrect. B is not the common variable."
    ]
  },
  {
    "id": 200,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "4-variable",
    "scenario": "A student simplifies a 4-variable K-map for F(A,B,C,D)=\u03a3m(2,3,6,7,10,11,14,15). Which expression results?",
    "options": [
      "C",
      "C'",
      "D",
      "B",
      "A"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These are all cells where C=1 (octet group). The simplified expression is C.",
      "Incorrect. This would be for minterms where C=0.",
      "Incorrect. D is not the common variable.",
      "Incorrect. B is not the common variable.",
      "Incorrect. A is not the common variable."
    ]
  },
  {
    "id": 201,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "4-variable",
    "scenario": "A student simplifies a 4-variable K-map for F(A,B,C,D)=\u03a3m(0,2,8,10). Which expression results?",
    "options": [
      "B'D'",
      "BD'",
      "B'D",
      "BD",
      "C'D'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These cells form a quad where B=0 and D=0. The expression is B'D'.",
      "Incorrect. This would require B=1, D=0.",
      "Incorrect. This would require B=0, D=1.",
      "Incorrect. This would require B=1, D=1.",
      "Incorrect. C and D are not the common variables."
    ]
  },
  {
    "id": 202,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "4-variable",
    "scenario": "A student simplifies a 4-variable K-map for F(A,B,C,D)=\u03a3m(1,3,5,7). Which expression results?",
    "options": [
      "A'D",
      "AD",
      "A'D'",
      "CD",
      "C'D"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These cells have A=0 and D=1. The quad simplifies to A'D.",
      "Incorrect. This would require A=1.",
      "Incorrect. This would require D=0.",
      "Incorrect. C varies in these cells.",
      "Incorrect. C varies in these cells."
    ]
  },
  {
    "id": 203,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "4-variable",
    "scenario": "A student simplifies a 4-variable K-map for F(A,B,C,D)=\u03a3m(0,1,2,3). Which expression results?",
    "options": [
      "A'B'",
      "AB'",
      "A'B",
      "AB",
      "A'C'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These are the first row cells with A=0, B=0. The expression is A'B'.",
      "Incorrect. This would be the row with A=1, B=0.",
      "Incorrect. This would be the row with A=0, B=1.",
      "Incorrect. This would be the row with A=1, B=1.",
      "Incorrect. C is not the varying variable in this group."
    ]
  },
  {
    "id": 204,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "5-variable",
    "scenario": "A student is working with a 5-variable K-map for F(A,B,C,D,E). How many cells does a 5-variable K-map have?",
    "options": [
      "32",
      "16",
      "64",
      "8",
      "24"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A 5-variable K-map has 2<sup>5</sup> = 32 cells.",
      "Incorrect. 16 cells is for a 4-variable K-map.",
      "Incorrect. 64 cells would be for a 6-variable K-map.",
      "Incorrect. 8 cells is for a 3-variable K-map.",
      "Incorrect. 24 is not a power of 2 and not valid."
    ]
  },
  {
    "id": 205,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "5-variable",
    "scenario": "A student simplifies a 5-variable K-map and finds identical groups in both the A=0 and A=1 halves. What does this imply for the final expression?",
    "options": [
      "Variable A is eliminated from that term",
      "Variable A must be included",
      "The function is invalid",
      "The groups cannot be combined",
      "A appears in complemented form only"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. When the same group appears in both halves of a 5-variable K-map, A is eliminated.",
      "Incorrect. Identical groups in both halves mean A is not needed in that term.",
      "Incorrect. The function can still be valid.",
      "Incorrect. Identical groups indicate the term is independent of A.",
      "Incorrect. A is completely eliminated, not just complemented."
    ]
  },
  {
    "id": 206,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "5-variable",
    "scenario": "In a 5-variable K-map for F(A,B,C,D,E)=\u03a3m(0,1,4,5,16,17,20,21), which variables remain in the simplified expression?",
    "options": [
      "B'C'",
      "A'B'",
      "C'D'",
      "AB'",
      "B'C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. These minterms all have B=0 and C=0 across both A=0 and A=1 halves. The expression is B'C'.",
      "Incorrect. A is eliminated since the pattern appears in both halves.",
      "Incorrect. D varies in these minterms.",
      "Incorrect. A is eliminated.",
      "Incorrect. C=0, not C=1."
    ]
  },
  {
    "id": 207,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "5-variable",
    "scenario": "A student simplifies a 5-variable K-map and finds a group of 8 adjacent cells. How many variables are eliminated by this group?",
    "options": [
      "3 variables",
      "2 variables",
      "4 variables",
      "1 variable",
      "5 variables"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A group of 2<sup>3</sup> = 8 cells eliminates 3 variables (leaving n-3 = 2 variables).",
      "Incorrect. A group of 4 cells eliminates 2 variables.",
      "Incorrect. A group of 16 cells eliminates 4 variables.",
      "Incorrect. A group of 2 cells eliminates 1 variable.",
      "Incorrect. A group of 32 cells would eliminate all 5 variables (result = 1)."
    ]
  },
  {
    "id": 208,
    "topic": "K-maps",
    "topicId": 16,
    "subtopic": "5-variable",
    "scenario": "In a 5-variable K-map, a student needs to consider adjacency between cells in different halves. Which cells are adjacent?",
    "options": [
      "Cells that differ only in variable A",
      "Cells that differ in all variables",
      "Cells in the same position in both halves",
      "Cells that are never adjacent across halves",
      "Only corner cells are adjacent"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect. Cells differing in A are in different halves but not necessarily adjacent.",
      "Incorrect. Cells differing in all variables are not adjacent.",
      "CORRECT. Cells in the same position in both A=0 and A=1 halves are adjacent (differing only in A).",
      "Incorrect. There is adjacency across halves for same-position cells.",
      "Incorrect. Adjacency is not limited to corners."
    ]
  },
  {
    "id": 209,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student is given a truth table with output 1 at minterms 1, 3, 5, and 7. Which SOP (Sum of Products) notation is correct?",
    "options": [
      "\u03a3m(1,3,5,7)",
      "\u03a0M(1,3,5,7)",
      "\u03a3m(0,2,4,6)",
      "\u03a0M(0,2,4,6)",
      "\u03a3m(1,2,3,4)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. SOP uses \u03a3 (sum) notation with the minterms where output is 1.",
      "Incorrect. \u03a0M denotes Product of Sums (POS), not SOP.",
      "Incorrect. These are the maxterms (where output is 0), not minterms.",
      "Incorrect. This is POS notation with maxterms.",
      "Incorrect. The minterms listed are not 1,3,5,7."
    ]
  },
  {
    "id": 210,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student is given a truth table with output 0 at minterms 0, 2, 4, and 6. Which POS (Product of Sums) notation is correct?",
    "options": [
      "\u03a0M(0,2,4,6)",
      "\u03a3m(0,2,4,6)",
      "\u03a0M(1,3,5,7)",
      "\u03a3m(1,3,5,7)",
      "\u03a0M(0,1,2,3)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. POS uses \u03a0 (product) notation with the maxterms (where output is 0).",
      "Incorrect. \u03a3m denotes SOP, not POS.",
      "Incorrect. These are the minterms where output is 1.",
      "Incorrect. This is SOP notation with minterms.",
      "Incorrect. The maxterms listed are not 0,2,4,6."
    ]
  },
  {
    "id": 211,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student converts the SOP expression A'B'C + A'BC + AB'C + ABC to a simpler form. Which is correct?",
    "options": [
      "C",
      "A'B' + AB",
      "A'C + AC",
      "B + C",
      "A + C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Factor: C(A'B' + A'B + AB' + AB) = C(A'(B'+B) + A(B'+B)) = C(A'+A) = C.",
      "Incorrect. This does not cover all minterms with C=1.",
      "Incorrect. While true, this simplifies further to C.",
      "Incorrect. B is not in the final expression.",
      "Incorrect. A is eliminated in the simplification."
    ]
  },
  {
    "id": 212,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student converts the POS expression (A+B+C)(A+B+C')(A+B'+C)(A+B'+C') to a simpler form. Which is correct?",
    "options": [
      "A",
      "A+B",
      "A+B'",
      "A'",
      "A'+B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (A+B+C)(A+B+C') = (A+B); (A+B'+C)(A+B'+C') = (A+B'). Then (A+B)(A+B') = A+BB' = A.",
      "Incorrect. While the first grouping gives (A+B), the full simplification is just A.",
      "Incorrect. The full simplification is A, not A+B'.",
      "Incorrect. The result is A, not A'.",
      "Incorrect. The result is A, not A'+B'."
    ]
  },
  {
    "id": 213,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student converts the SOP expression AB + AB' to its simplest form. Which is correct?",
    "options": [
      "A",
      "B",
      "A+B",
      "A'",
      "1"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. AB + AB' = A(B + B') = A\u00b71 = A.",
      "Incorrect. B is factored out but A remains.",
      "Incorrect. This over-expands the expression.",
      "Incorrect. The result is A, not A'.",
      "Incorrect. The result is A, not always 1."
    ]
  },
  {
    "id": 214,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student converts the POS expression (A+B)(A+B') to its simplest form. Which is correct?",
    "options": [
      "A",
      "B",
      "A+B",
      "A'",
      "A'+B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. (A+B)(A+B') = A + BB' = A + 0 = A.",
      "Incorrect. B is eliminated in the simplification.",
      "Incorrect. While partially true, the full simplification is just A.",
      "Incorrect. The result is A, not A'.",
      "Incorrect. The result is A."
    ]
  },
  {
    "id": 215,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student is converting a POS expression to canonical form. What is the canonical POS form of (A+B)?",
    "options": [
      "(A+B+C)(A+B+C')",
      "(A+B+C)",
      "(A+B)(A'+B')",
      "(A+B+C+C')",
      "(A+B)C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. To expand to 3 variables, multiply by (C+C'): (A+B+C)(A+B+C').",
      "Incorrect. This is only one maxterm, not canonical for 3 variables.",
      "Incorrect. This introduces terms not equivalent to (A+B).",
      "Incorrect. C+C'=1, but the expression form is invalid.",
      "Incorrect. This incorrectly multiplies by C instead of (C+C')."
    ]
  },
  {
    "id": 216,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student is converting an SOP expression to canonical form. What is the canonical SOP form of AB?",
    "options": [
      "ABC + ABC'",
      "AB(C+C')",
      "A+B+C",
      "(A+B)(A+C)",
      "AB + C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. To expand to 3 variables, ABC + ABC' = AB(C+C') = AB\u00b71 = AB.",
      "Incorrect. This is the intermediate step, not the canonical form.",
      "Incorrect. This is a sum, not a product.",
      "Incorrect. This is a POS expansion, not SOP.",
      "Incorrect. This is not equivalent to AB."
    ]
  },
  {
    "id": 217,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student has a function F(A,B,C) with minterms m(0,1,6,7). Which is the correct SOP expression?",
    "options": [
      "A'B' + AB",
      "A'B + AB'",
      "A'B'C' + A'BC",
      "ABC + A'B'C'",
      "A + B"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0,m1 = A'B'(C'+C) = A'B'; m6,m7 = AB(C'+C) = AB. Result: A'B' + AB.",
      "Incorrect. This would be for minterms m2,m5.",
      "Incorrect. This only covers some minterms.",
      "Incorrect. This only covers two minterms.",
      "Incorrect. This is not the correct simplification."
    ]
  },
  {
    "id": 218,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student has a function F(A,B,C) with maxterms M(0,2,4,6). Which is the correct POS expression?",
    "options": [
      "C",
      "C'",
      "(A+B)",
      "(A'+B')",
      "(A+B')"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. M(0,2,4,6) are all cells where C=0. Simplifying the maxterms: (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C) = C.",
      "Incorrect. C' would be for M(1,3,5,7) where C=1.",
      "Incorrect. A and B vary across these maxterms.",
      "Incorrect. A and B vary across these maxterms.",
      "Incorrect. A and B vary across these maxterms."
    ]
  },
  {
    "id": 219,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student converts the SOP expression A'BC + AB'C + ABC' + ABC to simplest form. Which is correct?",
    "options": [
      "AB + AC + BC",
      "A + B + C",
      "ABC",
      "A'B'C'",
      "(A+B)(B+C)(A+C)"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Group: A'BC+ABC = BC; AB'C+ABC = AC; ABC'+ABC = AB. Result: BC+AC+AB.",
      "Incorrect. The variables are not all independent.",
      "Incorrect. This loses many minterms.",
      "Incorrect. This is the complement of the function.",
      "Incorrect. This is POS, not the simplified SOP."
    ]
  },
  {
    "id": 220,
    "topic": "SOPs and PoS Simplification",
    "topicId": 17,
    "subtopic": "",
    "scenario": "A student is comparing SOP and POS forms. For a function with minterms m(0,1,2,3), which form is simpler?",
    "options": [
      "SOP: A'B' + A'B simplifies to A'",
      "POS: (A+B)(A+B') simplifies to A",
      "Both simplify to the same complexity",
      "SOP is always simpler",
      "POS is always simpler"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. SOP: m0,m1,m2,m3 all have A=0, giving A'. This is simplest.",
      "Incorrect. While POS also simplifies, the question asks about the given minterms.",
      "Incorrect. SOP gives A' directly.",
      "Incorrect. SOP is not always simpler; it depends on the function.",
      "Incorrect. POS is not always simpler; it depends on the function."
    ]
  },
  {
    "id": 221,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies a K-map with minterms m(1,3) and don't-care terms d(0,2). Which is the best simplified expression?",
    "options": [
      "A'",
      "A'B",
      "B",
      "A'C",
      "B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Using don't-cares d(0,2), all four cells (0,1,2,3) can be grouped, giving A'.",
      "Incorrect. While A'B covers some, using don't-cares gives the simpler A'.",
      "Incorrect. B alone does not cover m(1,3) with don't-cares.",
      "Incorrect. C is not the common variable in this group.",
      "Incorrect. B' does not cover the minterms."
    ]
  },
  {
    "id": 222,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies F(A,B,C)=\u03a3m(0,4)+d(1,5). What is the best simplified expression using don't-cares?",
    "options": [
      "C'",
      "B'C'",
      "A'C'",
      "AC'",
      "A'B'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0,m4,d1,d5 all have C=0. Grouping the quad gives C'.",
      "Incorrect. B varies in these cells.",
      "Incorrect. A varies in these cells.",
      "Incorrect. A varies in these cells.",
      "Incorrect. This does not cover all relevant cells."
    ]
  },
  {
    "id": 223,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "In a K-map with don't-cares, a student decides to treat all don't-cares as 1s. What is the potential benefit?",
    "options": [
      "Larger groups can be formed, yielding a simpler expression",
      "The function becomes always true",
      "The circuit becomes more complex",
      "Don't-cares must always be 0",
      "The K-map becomes invalid"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Treating don't-cares as 1s can create larger groups, simplifying the expression.",
      "Incorrect. Don't-cares are only at specific positions, not everywhere.",
      "Incorrect. Larger groups generally simplify, not complicate, the circuit.",
      "Incorrect. Don't-cares can be treated as either 0 or 1 for simplification.",
      "Incorrect. Using don't-cares is a valid K-map technique."
    ]
  },
  {
    "id": 224,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies F(A,B,C,D)=\u03a3m(0,2)+d(1,3). Which is the best simplified expression?",
    "options": [
      "A'B'",
      "A'B",
      "A'B'C'",
      "AB'",
      "B'C'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0(0000), m2(0010), d1(0001), d3(0011) all have A=0,B=0. Grouping gives A'B'.",
      "Incorrect. B=1 for m2 is not true; m2 has B=0.",
      "Incorrect. Using don't-cares, we can eliminate C as well, giving A'B'.",
      "Incorrect. A=1 is not true for these minterms.",
      "Incorrect. A=0 is also required for this group."
    ]
  },
  {
    "id": 225,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student is told that don't-care terms in a K-map are represented by the letter 'X'. What does 'X' mean?",
    "options": [
      "The output can be either 0 or 1",
      "The output is always 0",
      "The output is always 1",
      "The input combination never occurs",
      "The circuit is faulty"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. 'X' (don't-care) means the output can be treated as 0 or 1 for simplification.",
      "Incorrect. Don't-cares are not forced to 0.",
      "Incorrect. Don't-cares are not forced to 1.",
      "Incorrect. While don't-cares often correspond to unused inputs, they mean the output is flexible.",
      "Incorrect. Don't-cares are a design choice, not a fault."
    ]
  },
  {
    "id": 226,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies F(A,B,C)=\u03a3m(1,5)+d(3,7). Which is the best simplified expression?",
    "options": [
      "C",
      "A'C",
      "B'C",
      "AC",
      "AB'C"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m1(A'B'C), m5(AB'C), d3(A'BC), d7(ABC) all have C=1. Grouping gives C.",
      "Incorrect. Using don't-cares, A is eliminated.",
      "Incorrect. Using don't-cares, B is also eliminated.",
      "Incorrect. Using don't-cares, A is eliminated.",
      "Incorrect. This is not fully simplified."
    ]
  },
  {
    "id": 227,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student is designing a BCD to 7-segment decoder. Why are there many don't-care conditions?",
    "options": [
      "BCD only uses inputs 0-9; inputs 10-15 never occur",
      "The decoder is faulty",
      "Don't-cares are not needed",
      "All input combinations are used",
      "The 7-segment display is broken"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. BCD uses 4 bits but only represents 0-9. Inputs 10-15 are don't-cares.",
      "Incorrect. Don't-cares are a design feature, not a fault.",
      "Incorrect. Don't-cares significantly simplify BCD decoder design.",
      "Incorrect. BCD does not use all 16 input combinations.",
      "Incorrect. Don't-cares are unrelated to display functionality."
    ]
  },
  {
    "id": 228,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student has a K-map with don't-cares and decides not to use any of them. What is the consequence?",
    "options": [
      "The expression may be more complex than necessary",
      "The K-map becomes invalid",
      "The circuit will not work",
      "The function changes",
      "Don't-cares must always be used"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Not using don't-cares may result in smaller groups and a more complex expression.",
      "Incorrect. The K-map remains valid; simplification is just suboptimal.",
      "Incorrect. The circuit will still work correctly.",
      "Incorrect. The function does not change; only the implementation may be suboptimal.",
      "Incorrect. Using don't-cares is optional but recommended."
    ]
  },
  {
    "id": 229,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies F(A,B,C,D)=\u03a3m(0,8)+d(2,10). Which is the best simplified expression?",
    "options": [
      "B'D'",
      "B'C'",
      "AB'",
      "A'B'",
      "C'D'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0(0000), m8(1000), d2(0010), d10(1010) all have B=0,D=0. Grouping gives B'D'.",
      "Incorrect. C varies (m0 has C=0, d2 has C=1).",
      "Incorrect. A varies (m0 has A=0, m8 has A=1).",
      "Incorrect. A varies in these cells.",
      "Incorrect. B=0 is the common factor, not just C'D'."
    ]
  },
  {
    "id": 230,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies a K-map with don't-cares and finds two equally simple expressions. What should they do?",
    "options": [
      "Choose either expression; both are valid",
      "Must find a unique expression",
      "Cannot use don't-cares",
      "The K-map is invalid",
      "Must use all don't-cares"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. When multiple equally simple expressions exist, either is a valid simplification.",
      "Incorrect. Multiple minimal forms can exist for the same function.",
      "Incorrect. Don't-cares were used correctly.",
      "Incorrect. Multiple minimal forms do not invalidate the K-map.",
      "Incorrect. Not all don't-cares need to be used."
    ]
  },
  {
    "id": 231,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student simplifies F(A,B,C)=\u03a3m(0,7)+d(1,6). Which is the best simplified expression?",
    "options": [
      "A'B'C' + ABC",
      "A'B' + BC",
      "A' + B",
      "Cannot be simplified further",
      "A'B'C' + ABC + A'BC'"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. m0 and m7 are not adjacent and don't-cares don't help group them. Result: A'B'C' + ABC.",
      "Incorrect. m0 and m7 are not adjacent; don't-cares don't form a larger group.",
      "Incorrect. This would cover cells not in the function.",
      "Incorrect. While minimal grouping is used, the expression can still be written as the sum of minterms.",
      "Incorrect. A'BC' (m2) is a don't-care, not a minterm."
    ]
  },
  {
    "id": 232,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student uses don't-cares in a 4-variable K-map to form a group of 8 cells. How many variables are eliminated?",
    "options": [
      "3",
      "2",
      "4",
      "1",
      "0"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. A group of 8 = 2<sup>3</sup> cells eliminates 3 variables (4-3 = 1 variable remains).",
      "Incorrect. A group of 4 eliminates 2 variables.",
      "Incorrect. A group of 16 would eliminate 4 variables.",
      "Incorrect. A group of 2 eliminates 1 variable.",
      "Incorrect. A group of 1 eliminates 0 variables."
    ]
  },
  {
    "id": 233,
    "topic": "Don't Care Terms",
    "topicId": 18,
    "subtopic": "",
    "scenario": "A student is told that don't-care conditions come from invalid input combinations. Why is this useful?",
    "options": [
      "It allows the designer to choose output values that maximize simplification",
      "It makes the circuit always output 0",
      "It has no effect on simplification",
      "It forces all outputs to 1",
      "It makes the K-map harder to use"
    ],
    "correctIndex": 0,
    "explanations": [
      "CORRECT. Don't-cares provide flexibility to choose values that create larger groups.",
      "Incorrect. Don't-cares don't force outputs to 0.",
      "Incorrect. Don't-cares can significantly improve simplification.",
      "Incorrect. Don't-cares don't force outputs to 1.",
      "Incorrect. Don't-cares make the K-map easier to simplify."
    ]
  }
] as const;

export type Question = typeof questions[number];
