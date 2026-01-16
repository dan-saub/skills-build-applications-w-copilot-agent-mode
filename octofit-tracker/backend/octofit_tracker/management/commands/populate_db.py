from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear collections
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Users
        users = [
            User(name='Spider-Man', email='spiderman@marvel.com', team='Marvel'),
            User(name='Iron Man', email='ironman@marvel.com', team='Marvel'),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team='DC'),
            User(name='Batman', email='batman@dc.com', team='DC'),
        ]
        for user in users:
            user.save()

        # Activities
        activities = [
            Activity(user_email='spiderman@marvel.com', type='Running', duration=30, date=date.today()),
            Activity(user_email='ironman@marvel.com', type='Cycling', duration=45, date=date.today()),
            Activity(user_email='wonderwoman@dc.com', type='Swimming', duration=60, date=date.today()),
            Activity(user_email='batman@dc.com', type='Yoga', duration=20, date=date.today()),
        ]
        for activity in activities:
            activity.save()

        # Leaderboard
        Leaderboard.objects.create(team='Marvel', points=75)
        Leaderboard.objects.create(team='DC', points=80)

        # Workouts
        workouts = [
            Workout(name='Hero HIIT', difficulty='Hard', suggested_for='Marvel'),
            Workout(name='Power Yoga', difficulty='Medium', suggested_for='DC'),
        ]
        for workout in workouts:
            workout.save()

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
