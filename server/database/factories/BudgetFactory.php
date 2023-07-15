<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\budget>
 */
class BudgetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->word,
            'budget' => $this->faker->randomFloat(2, -999999.99, 999999.99),
            'category' => $this->faker->text,
            'status' => function (array $data) {
                if ($data['budget'] > 0) {
                    return 'good';
                } elseif ($data['budget'] < 0) {
                    return 'bad';
                } else {
                    return 'neutral';
                }
            }
        ];
    }
}
