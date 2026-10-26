#include <iostream>
#include <vector>
using namespace std;

int linearSearch(vector<int> A, int value, int low, int high)
{
    if (low <= high)
    {
        if (A[low] == value)
            return low;
        else
            return linearSearch(A, value, low + 1, high);
    }
    return -1;
}
int main()
{
    int n;
    cout << "Enter size of array: ";
    cin >> n;
    vector<int> A(n);
    cout << "Enter array elements: ";
    cout<<"Ayushmaan Srivastava"<<endl;
    cout<< 2400321530062;
    for (int i = 0; i < n; i++)
        cin >> A[i];
    int value;
    cout << "Enter element to search: ";
    cin >> value;
    int result = linearSearch(A, value, 0, n - 1);
    if (result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found";
    return 0;
}
