from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelTests(TestCase):
    def test_user_creation(self):
        user = User.objects.create(name='Test', email='test@example.com', team='Marvel')
        self.assertEqual(user.name, 'Test')
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.team, 'Marvel')

    def test_team_creation(self):
        team = Team.objects.create(name='TestTeam')
        self.assertEqual(team.name, 'TestTeam')

    def test_activity_creation(self):
        activity = Activity.objects.create(user_email='test@example.com', type='Running', duration=10, date='2026-01-16')
        self.assertEqual(activity.type, 'Running')
        self.assertEqual(activity.duration, 10)

    def test_leaderboard_creation(self):
        lb = Leaderboard.objects.create(team='Marvel', points=100)
        self.assertEqual(lb.team, 'Marvel')
        self.assertEqual(lb.points, 100)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='TestWorkout', difficulty='Easy', suggested_for='Marvel')
        self.assertEqual(workout.name, 'TestWorkout')
        self.assertEqual(workout.difficulty, 'Easy')
