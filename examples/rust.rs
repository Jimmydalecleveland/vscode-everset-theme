use std::cmp::Ordering;

fn elevator_distance(floors: &[i16]) -> i16 {
    let mut distance_traveled = 0;
    let mut last_floor = floors[0];

    for current_floor in floors {
        match last_floor.cmp(current_floor) {
            Ordering::Greater => distance_traveled += last_floor - *current_floor,
            Ordering::Less => distance_traveled += *current_floor - last_floor,
            Ordering::Equal => (),
        }
        last_floor = *current_floor;
    }
    distance_traveled
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn test_elevator_distance() {
		assert_eq!(elevator_distance(&[5, 2, 8]), 9);
		assert_eq!(elevator_distance(&[1, 2, 3]), 2);
		assert_eq!(elevator_distance(&[7, 1, 7, 1]), 18);
	}
}


/*!
# Bubble Sort
This is a bubble sort method adopted from the book:
"A Common-Sense Guide to Data Structures and Algorithms"
!*/

fn bubble_sort(arr: &mut [i32]) {
	let mut is_list_sorted = false;
	let mut last_indexed_pos = arr.len() - 1;

	while !is_list_sorted {
		println!("\nNew pass: ======");
		is_list_sorted = true;

		for i in 0..last_indexed_pos {
			let left = arr[i];
			let right = arr[i+1];
			println!("current compare: {} <-> {}", left, right);

			if left > right {
				arr[i] = right;
				arr[i+1] = left;
				is_list_sorted = false;
			}
		}

		if last_indexed_pos > 0 {
			last_indexed_pos -= 1;
		}
	}
}

// While this version is much more succinct, it
// is less efficient in all but worst case scenarios.
// This is because it always runs the outer loop n times,
// never checking if the list is sorted already.
fn alternative_bubble_sort(arr: &mut [i32]) {
	let mut i = arr.len() - 1;
	while i > 0 {

		for j in 0..i {
			if arr[j] > arr[j+1] {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}

		i = i - 1;
	}
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn test_bubble_sort() {
		let mut list = [34, 15, 96, 88, 2];
		bubble_sort(&mut list);
		assert_eq!(list,  [2, 15, 34, 88, 96]);

		let mut list = [1, 1, 5, 5, 7, 7, 4, 4, 1, 2, 3, 4];
		bubble_sort(&mut list);
		assert_eq!(list , [1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 7, 7]);

	}
}
