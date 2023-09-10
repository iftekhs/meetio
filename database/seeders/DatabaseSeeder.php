<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Activity;
use App\Models\Meeting;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(1)->create([
            'name' => 'Iftekhar Ahmad',
            'email' => 'admin@email.com',
            'role' => 'admin'
        ]);

        User::factory(10)->create();

        Meeting::factory(10)->create();

        Activity::factory(159)->create();

        cache()->forget('logins_count');
        cache()->forget('users_count');
        cache()->forget('meetings_count');
    }
}
