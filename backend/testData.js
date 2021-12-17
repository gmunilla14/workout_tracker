workoutPlans = [
    {
      name: "Arm Workout",
      author: "Greg Munilla",
      sets: [
        {
          number: 1,
          type: "exercise",
          plannedWeight: 30,
          plannedReps: 8,
          exerciseId: 1,
        },
        {
          number: 2,
          type: "rest",
          plannedDuration: 45,
        },
        {
          number: 3,
          type: "exercise",
          plannedWeight: 30,
          plannedReps: 8,
          exerciseId: 1,
        },
        {
          number: 4,
          type: "rest",
          plannedDuration: 30,
        },
        {
          number: 5,
          type: "exercise",
          plannedWeight: 30,
          plannedReps: 8,
          exerciseId: 1,
        },
        {
          number: 6,
          type: "rest",
          plannedDuration: 30,
        },
        {
          number: 7,
          type: "exercise",
          plannedWeight: 135,
          plannedReps: 8,
          exerciseId: 2,
        },
        {
          number: 8,
          type: "rest",
          plannedDuration: 30,
        },
        {
          number: 9,
          type: "exercise",
          plannedWeight: 135,
          plannedReps: 8,
          exerciseId: 2,
        },
        {
          number: 10,
          type: "rest",
          plannedDuration: 30,
        },
        {
          number: 11,
          type: "exercise",
          plannedWeight: 50,
          plannedReps: 8,
          exerciseId: 3,
        },
        {
          number: 12,
          type: "rest",
          plannedDuration: 30,
        },
        {
          number: 13,
          type: "exercise",
          plannedWeight: 50,
          plannedReps: 8,
          exerciseId: 3,
        },
      ],
    },
  ];
  
  workouts = [
    {
      planID: 1,
      startTime: 99,
      endTime: 201,
      sets: [
        {
          number: 1,
          type: "exercise",
          startTime: 100,
          endTime: 105,
          exerciseId: 1,
          weight: 30,
          reps: 8,
        },
        {
          number: 2,
          type: "rest",
          startTime: 105,
          endTime: 120,
        },
        {
          number: 3,
          type: "exercise",
          startTime: 121,
          endTime: 140,
          exerciseId: 1,
          weight: 30,
          reps: 6,
        },
        {
          number: 4,
          type: "rest",
          startTime: 140,
          endTime: 150,
        },
        {
          number: 5,
          type: "exercise",
          startTime: 100,
          endTime: 150,
          exerciseId: 1,
          weight: 25,
          reps: 4,
        },
        {
          number: 6,
          type: "rest",
          startTime: 150,
          endTime: 170,
        },
        {
          number: 7,
          type: "exercise",
          startTime: 170,
          endTime: 180,
          exerciseId: 2,
          weight: 135,
          reps: 4,
        },
        {
          number: 8,
          type: "rest",
          startTime: 180,
          endTime: 195,
        },
        {
          number: 9,
          type: "exercise",
          startTime: 195,
          endTime: 220,
          exerciseId: 2,
          weight: 150,
          reps: 4,
        },
        {
          number: 10,
          type: "rest",
          startTime: 220,
          endTime: 240,
        },
        {
          number: 11,
          type: "exercise",
          startTime: 240,
          endTime: 250,
          exerciseId: 3,
          weight: 50,
          reps: 8,
        },
      ],
    },
  ];
  
  muscles = [
    {
      id: 1,
      name: "Triceps",
    },
    {
      id: 2,
      name: "Biceps",
    },
    {
      id: 3,
      name: "Chest",
    },
  ];
  
  exercises = [
    {
      id: 1,
      name: "Tricep Curl",
      muscles: [1],
    },
    {
      id: 2,
      name: "Bench Press",
      muscles: [1, 3],
    },
    {
      id: 3,
      name: "Biceps Curl",
      muscles: [2],
    },
  ];
  