<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BudgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\budget::factory()->count(30)->create();
        \App\Models\budget::factory()->create([
            'title' => 'neutral',
            'budget' => 0,
            'category' => 'neutral',
            'status' => 'neutral',
        ]);
        # command for seeders: php artisan db:seed --class=BudgetSeeder
    }
}
