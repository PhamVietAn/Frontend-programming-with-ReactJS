const Students = [
    {
        name: "Dev",
        age: 20,
        listMonHoc: [
            {subject: "Math", score: 8},
            {subject: "English", score: 7.5},
            {subject: "Physics", score: 7},
            {subject: "Literature", score: 9}
        ]
    }
]


function getStudentSummary(Students) {
    Students.forEach(student => {
        const { name, age, listMonHoc } = student;
        const avg = (
            listMonHoc.reduce((sum, mh) => sum + mh.score, 0) / listMonHoc.length
        ).toFixed(2);
        let rank = '';
        if (avg >= 8.5) rank = 'Học sinh giỏi';
        else if (avg >= 7) rank = 'Học sinh khá';
        else if (avg >= 5) rank = 'Học sinh trung bình';
        else rank = 'Học sinh yếu';

        const sorted = [...listMonHoc].sort((a, b) => b.score - a.score);
        const best = sorted[0];
        const worst = sorted[sorted.length - 1];

        console.log(`Dev is ${age} years old.`);
        console.log(`Average score: ${avg} -> ${rank}`);
        console.log(`Best subject: ${best.subject} (${best.score})`);
        console.log(`Weakest subject:   ${worst.subject} (${worst.score})`);
    });
}

getStudentSummary(Students);