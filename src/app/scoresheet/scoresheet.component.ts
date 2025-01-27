import { Component } from '@angular/core';

type ScoreData = {
};

@Component({
  selector: 'app-scoresheet',
  templateUrl: './scoresheet.html',
  styleUrls: ['./scoresheet.css']
})
export class ScoresheetComponent {
      
  startupIdea: string = '';
    targetMarket: string = '';
    growthPotential: string = '';
    revenueModel: string = '';
    teamMembers: string = '';
    totalScore: string = '';
    feedback: string = '';
};

const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;

saveBtn.addEventListener('click', async () => {
    const pitchDeck = (document.getElementById('pitchDeck') as HTMLInputElement).value;
    const startupIdea = (document.getElementById('startupIdea') as HTMLInputElement).value;
    const targetMarket = (document.getElementById('targetMarket') as HTMLInputElement).value;
    const growthPotential = (document.getElementById('growthPotential') as HTMLInputElement).value;
    const revenueModel = (document.getElementById('revenueModel') as HTMLInputElement).value;
    const stageOfStartup = (document.getElementById('stageOfStartup') as HTMLInputElement).value;
    const teamMembers = (document.getElementById('teamMembers') as HTMLInputElement).value;
    const totalScore = (document.getElementById('totalScore') as HTMLInputElement).value;
    const feedback = (document.getElementById('feedback') as HTMLTextAreaElement).value;

    const data: ScoreData = {
        pitchDeck,
        startupIdea,
        targetMarket,
        growthPotential,
        revenueModel,
        stageOfStartup,
        teamMembers,
        totalScore,
        feedback,
    };

    try {
        const response = await fetch('http://localhost:8000/api/save-scores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Scores saved successfully!');
        } else {
            const errorData = await response.json();
            alert(`Failed to save scores: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error saving scores:', error);
        alert('An error occurred. Please try again later.');
    }
});


