/**
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import {NullPointerException, IllegalArgumentException} from './errors';

export function assert(assertion, msg, error) {
    if(!assertion){
        if (error) {
            throw new error(msg);
        } else {
            throw new Error(msg);
        }
    }
}

export function requireNonNull(value, parameterName) {
    if (value == null) {
        throw new NullPointerException(parameterName + ' must not be null');
    }
    return value;
}

export function requireInstance(value, _class, parameterName) {
    if (!(value instanceof _class)) {
        throw new IllegalArgumentException(parameterName + ' must be an instance of ' + (_class.name ? _class.name : _class));
    }
    return value;
}

export function abstractMethodFail(methodName){
    throw new TypeError('abstract mehod "' + methodName + '" is not implemented');
}